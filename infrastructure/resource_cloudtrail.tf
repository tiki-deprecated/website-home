variable "aws_s3_bucket_log" { }

data "aws_s3_bucket" "static-site" {
  bucket = var.aws_s3_bucket
}

resource "aws_cloudtrail" "s3_object_log" {
  name                          = "ct-s3-${var.aws_s3_bucket}"
  s3_bucket_name                = var.aws_s3_bucket_log
  include_global_service_events = false

  event_selector {
    read_write_type           = "WriteOnly"
    include_management_events = true

    data_resource {
      type = "AWS::S3::Object"
      values = ["${data.aws_s3_bucket.static-site.arn}/"]
    }
  }
}
