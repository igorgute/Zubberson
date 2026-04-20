#  Zuberson

Plataforma fullstack de mobilidade inspirada em aplicações como Uber, desenvolvida com foco em arquitetura moderna, autenticação segura e separação clara entre backend e frontend.

---

##  Sobre o Projeto

Zuberson é um sistema de transporte que permite a interação entre **passageiros** e **motoristas**, incluindo:

* criação de corridas
* aceitação de corridas por motoristas
* finalização de corridas
* autenticação segura com JWT
* controle de acesso baseado em tipo de usuário

O projeto foi desenvolvido como prática avançada de desenvolvimento fullstack.

---

##  Arquitetura

O projeto é dividido em duas camadas principais:

```text
backend/   → API REST (FastAPI)
frontend/  → Interface web (React + Vite)
```

---

##  Tecnologias

### Backend

* FastAPI
* SQLAlchemy
* SQLite
* JWT (python-jose)
* Passlib + Bcrypt
* Python-dotenv

### Frontend

* React
* Vite
* React Router DOM
* Axios
* Context API

---

##  Autenticação e Segurança

* Hash de senha com bcrypt
* Tokens JWT com expiração
* Rotas protegidas
* Controle de acesso por tipo:

  * passageiro
  * motorista

---

## Funcionalidades

### Backend

* Cadastro de usuários
* Login com JWT
* Identificação do usuário autenticado
* Criação de corridas
* Aceitação de corridas
* Finalização de corridas
* Cadastro de motorista
* Cadastro de veículo

### Frontend

* Login e cadastro
* Persistência de sessão
* Dashboard inicial
* Rotas protegidas
* Integração com API

---

## ▶ Como executar

## Executando com Docker

Na raiz do projeto, execute:

```bash
docker compose up --build
```
---
### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Acesse:

```text
http://127.0.0.1:8000/docs
```

---

### 💻 Frontend

```bash
cd frontend
npm install
npm run dev
```

Acesse:

```text
http://localhost:5173
```

---

## Variáveis de ambiente

Crie um `.env` dentro de `backend/`:

```env
SECRET_KEY=sua_chave_secreta_segura
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=60
DATABASE_URL=sqlite:///./test.db
```

---

## Estrutura

```text
backend/
  ├── app/
  ├── models/
  ├── routes/
  ├── schemas/
  └── utils/

frontend/
  ├── src/
  │   ├── components/
  │   ├── pages/
  │   ├── context/
  │   ├── services/
  │   └── routes/
```

---

## Status do Projeto

✔ Backend funcional
✔ Autenticação completa
✔ Frontend integrado
✔ Dashboards

## Próximas etapas
☐ Fluxo completo de corridas no frontend
☐ Migração para sistemas mobiles

---

## Roadmap

* [ ] Dashboard avançado
* [ ] Criação de corrida via frontend
* [ ] Listagem de corridas
* [ ] Interface de motorista
* [ ] WebSocket (tempo real)
* [ ] Sistema de pagamento
* [ ] Versão mobile (Expo)


---

## Sobre o Autor

Projeto desenvolvido com foco em aprendizado avançado de arquitetura fullstack e boas práticas de desenvolvimento.

---

## Observações

Este projeto está em desenvolvimento ativo e será expandido com novas funcionalidades e melhorias de arquitetura.
