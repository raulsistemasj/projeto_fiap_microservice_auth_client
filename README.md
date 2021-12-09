# Projeto_fiap_microservice_auth_client
Micro serviço para criação e atualização de senha de usuario e geração de token de acesso.
Projeto feito para o modulo de microserviço do curso Fiap mobile.
path:
/api/usuario/cadastrar
/api/usuario/login
/api/usuario/atualizar/senha
/api/usuario
/api/health

# Install e subida do servidor
baixar o projeto, abrir a pasta service_user_auth no vscode, abra o terminal e execute o comando nmp install, para subir a aplicação execute o comando nodemom.
Caso não tenha o nodemon instalado na maquina execute o npm install nodemon.

# Funcionalidades 
Cadastro de usuário com o campos abaixo obrigatórios menos o telefone:

{
    "username" : "",
    "email": "",
    "password" : "",
    "telefone" : "",
    "nomecompleto": ""
}

Login do usuário obrigatórios:

{
    "email": "",
    "password" : ""
}

Atualização de senha do usuário tem que estar autenticado:
header token = ""

{
    "id":"",
    "password":""
}

Consulta usuário, tem que estar autenticado:
tras todos os usuários cadastrados no sistema.
header token = ""

# Autor Raul M Ferreira

