output "instance_id" {
  description = "ID da instancia EC2"
  value       = aws_instance.devops_server.id
}

output "public_ip" {
  description = "Endereco IP publico da instancia"
  value       = aws_instance.devops_server.public_ip
}