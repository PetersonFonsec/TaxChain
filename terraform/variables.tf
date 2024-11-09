
variable "aws_location" {
  description = "Região onde os recursos serão criados na AWS"
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Nome do projeto"
  type        = string
  default     = "Taxchain"
}

variable "s3_bucket" {
  description = "Nome do projeto"
  type        = string
  default     = "taxchain"
}

variable "dynamodb" {
  description = "Nome do projeto"
  type        = string
  default     = "Taxchain"
}
