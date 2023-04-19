
# :hamburger: Food mongoDB

Nessa atividade feita na Trybe, criei scripts basicos do banco NoSQL MongoDB, para gerenciar informações de uma lanchonete e apresentar essas informações seguindo os requisitos da atividade.


## :wrench: Instalação

Para utilização via docker, siga os passos abaixo.

1. Criando container com volume /app

```bash
docker run -d --name=nomeDoContainer -v "$PWD:/app" -p 27017:27017 mongo:5.0
```

2. Com o container em execusão, acesse o terminal do mesmo

```bash
docker exec -it nomeDoContainer bash
```

3. No terminal do container acesse o volume app

```bash
cd app
```

4. Execute o comando abaixo para criar o banco de dados no container.

```bash
DBNAME=commerce ./scripts/resetdb.sh assets/produtos
```
    
## :man_technologist: Feito por
- [Wanderson Ricardo](https://www.linkedin.com/in/wanderson-ricardo-dev/)

