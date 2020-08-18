# Esqueci minha senha

**RF** (Requisitos Funcionais)
<!-- Refere-se as funcionalidades que iremos ter na aplicação -->

- O usuário deve poder recuperar sua senha informando seu email;
- O usuário deve receber um email com as instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF** (Requisitos não funcionais)
<!-- São coisas que não estão ligadas diretamente com a regra de negócio da aplicação  Exemplo: Qual lib será utilizada, qual banco, etc.-->

- Utilizar Mailtrap para testar envio de email em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em produção;
- O envio de emails deve acontecer em segundo plano (background job);

**RN** (Regras de Negócios)
<!--  -->

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisar confirmar a nova senha ao fazer o reset (digitar 2 vezes);

# Atualização do Perfil

**RF**
- O usuário deve poder atualizar seu nome, email e senha;

**RN**
- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do Prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia deve ser armazenado em cache;
- As notificações do prestador devem ser armazenada no mongoDB;
- As notificações do prestador devem ser envidas em tempo real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;


# Agendamento de serviços

**RF**

- O usuário deve poder listar todos prestadores de serviços cadastrados;
- O usuário deve poder listar os dias com horários disponíveis de um prestador;
- O usuário deve poder listar horários disponíveis em um dia especifico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;


**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre as 8h às 18h (primeiro 08h, último 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços com ele mesmo;





