resource "aws_dynamodb_table" "user_signup" {
  name         = var.global_dynamodb_table_name
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "contact_info"
  range_key    = "timestamp_utc"

  attribute {
    name = "contact_info"
    type = "S"
  }

  attribute {
    name = "timestamp_utc"
    type = "S"
  }

  server_side_encryption {
    enabled = true
  }

  point_in_time_recovery {
    enabled = true
  }

  tags = {
    Environment = local.global_tag_environment
    Service     = local.global_tag_service
  }
}
