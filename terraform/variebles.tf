
variable "aws_location" {
  description = "Região onde os recursos serão criados na AWS"
  type        = string
  default     = "us-east-1"
}

variable "access_key" {
  description = "access_key gerado na AWS"
  type        = string
  default     = ""
}

variable "secret_key" {
  description = "secret_key gerado na AWS"
  type        = string
  default     = ""
}

variable "project_name" {
  description = "Nome do projeto"
  type        = string
  default     = "Taxchain"
}

variable "s3_bucket" {
  description = "Nome do projeto"
  type        = string
  default     = "Taxchain"
}

variable "dynamodb" {
  description = "Nome do projeto"
  type        = string
  default     = "Taxchain"
}
