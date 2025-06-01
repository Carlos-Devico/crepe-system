# Etapa 1 - Build da aplicação com dependências
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Gera os binários do Prisma para o ambiente de produção
RUN npx prisma generate

# Etapa 2 - Imagem final de produção
FROM node:18-alpine

WORKDIR /app

COPY --from=build /app /app

# Instala somente as dependências de produção
RUN npm install --omit=dev

EXPOSE 3001

CMD ["npm", "run", "dev"]
