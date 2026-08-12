variable "aws_region" {
  description = "Regiao AWS utilizada pelo projeto"
  type        = string
  default     = "us-east-1"
}

variable "instance_type" {
  description = "Tipo da instancia EC2"
  type        = string
  default     = "t2.micro"
}

variable "ami_id" {
  description = "AMI utilizada pela instancia EC2"
  type        = string
  default     = "ami-0c02fb55956c7d316"
}