https://medium.com/@sagar.hudge/layers-in-software-architecture-c8cc16329ff6

# Modelo de Arquitetura em Camadas para API REST

# 📁 Estrutura de Pastas

```
/project-root
├── /presentation/
│   ├── /controllers/
│   │   ├── CreateOrderUseCaseController.ts
│   │   ├── GetUserOrdersUseCaseController.ts
│   │   └── CreateQuestionUseCaseController.ts
│   ├── /routes/
│   │   ├── orderRoutes.ts
│   │   └── questionRoutes.ts
│   └── /middlewares/
│       └── AuthMiddleware.ts
│
├── /application/
│   └── /use-cases/
│       ├── CreateOrderUseCase.ts
│       ├── GetUserOrdersUseCase.ts
│       └── CreateQuestionUseCase.ts
│
├── /domain/
│   ├── /entities/
│   │   ├── Order.ts
│   │   ├── User.ts
│   │   └── Question.ts
│   ├── /value-objects/
│   │   └── Email.ts
│   └── /repositories/
│       ├── IOrderRepository.ts
│       ├── IUserRepository.ts
│       └── IQuestionRepository.ts
│
├── /infrastructure/
│   ├── /repositories/
│   │   ├── PrismaOrderRepository.ts
│   │   ├── PrismaUserRepository.ts
│   │   └── PrismaQuestionRepository.ts
│   ├── /database/
│   │   ├── prisma/
│   │   │   └── schema.prisma
│   │   └── connection.ts
│   └── /services/
│       └── PaymentGateway.ts
│
├── /config/
│   ├── env/
│   │   ├── .env
│   │   └── .env.production
│   └── settings.ts
│
├── /tests/
│   ├── /unit/
│   │   ├── CreateOrderUseCase.spec.ts
│   │   ├── CreateQuestionUseCase.spec.ts
│   └── /integration/
│       ├── OrderFlow.spec.ts
│       └── QuestionFlow.spec.ts
│
├── server.ts
└── README.md
```

# 📄 Descrição das Camadas

## 1. **Camada de Apresentação (Presentation Layer)**

Camada responsável por lidar com a comunicação externa, geralmente por meio de uma API REST, interface web ou qualquer outro tipo de entrada/saída.

Aqui ficam os controllers, rotas, middlewares e tudo que trata da interação com o usuário ou cliente do sistema.

Exemplo: Controllers que recebem requisições HTTP, validam dados básicos e chamam os casos de uso.

## 2. **Camada de Aplicação (Application Layer)**

Esta camada contém a lógica de orquestração do sistema, conhecida como casos de uso (use cases).

Ela define o que o sistema deve fazer em termos de operações de negócio, coordenando entidades e interagindo com os repositórios.

Não contém regras de negócio complexas, mas sim o fluxo de aplicação e regras específicas de uso.

## 3. **Camada de Domínio (Domain Layer)**

É o coração do sistema, onde residem as regras de negócio fundamentais.

Aqui ficam as entidades, objetos de valor (value objects), interfaces dos repositórios e regras importantes que modelam o problema real.

Esta camada é independente de frameworks, bancos de dados ou detalhes técnicos.

## 4. **Camada de Infraestrutura (Infrastructure Layer)**

Contém as implementações concretas das interfaces que conectam o sistema ao mundo externo.

Exemplos: repositórios que acessam bancos de dados, serviços externos, configurações técnicas, integrações com APIs, etc.

Serve para abstrair os detalhes tecnológicos, mantendo o domínio e aplicação desacoplados.

## 5. Config (Configuração)

Local onde ficam as configurações gerais do sistema, como variáveis de ambiente, parâmetros de conexão, e outros ajustes necessários para o ambiente.

## 6. Tests (Testes)

Contém os testes automatizados do sistema, organizados em testes unitários (testando unidades isoladas, como entidades e casos de uso) e testes de integração (testando fluxo e integração entre várias partes do sistema).

# 🔍  Visão Geral

Cada camada tem responsabilidades bem definidas e depende apenas das camadas internas, garantindo baixo acoplamento e alta coesão.

Assim, o sistema fica mais fácil de manter, testar e evoluir.