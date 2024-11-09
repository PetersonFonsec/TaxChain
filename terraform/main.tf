terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_location

  default_tags {
    tags = {
      owner      = "Peterson F. Simião"
      managed-by = "terraform"
    }
  }
}