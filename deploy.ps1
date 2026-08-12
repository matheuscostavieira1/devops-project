Write-Host "Iniciando deploy da aplicacao..."

docker stop devops-container 2>$null
docker rm devops-container 2>$null

docker build -t devops-project .

docker run -d `
  --name devops-container `
  -p 3000:3000 `
  devops-project

Write-Host "Deploy concluido com sucesso."
Write-Host "Aplicacao disponivel em http://localhost:3000"