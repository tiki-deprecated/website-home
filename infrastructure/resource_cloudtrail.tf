//TODO  provider.terraform-provider-aws_v3.44.0_x5: 2021/06/07 05:09:00 [DEBUG] [aws-sdk-go] {"__type":"InsightNotEnabledException","Message":"Trail arn:aws:cloudtrail:us-east-1:164408864927:trail/ct-s3-tiki-website-frontend-development does not have Insights enabled. Edit the trail settings to enable Insights, and then try the operation again."}: timestamp=2021-06-07T05:09:00.981Z

resource "aws_cloudtrail" "website_object_log" {
  name                          = "ct-s3-${local.global_bucket_frontend}"
  s3_bucket_name                = var.global_bucket_logs
  include_global_service_events = false

  tags = {
    Environment = var.global_tag_environment
    Service     = var.global_tag_service
  }

  event_selector {
    read_write_type           = "WriteOnly"
    include_management_events = false

    data_resource {
      type   = "AWS::S3::Object"
      values = ["${aws_s3_bucket.frontend.arn}/"]
    }
  }
}
