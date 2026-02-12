FROM node:18-alpine

# Dependências do sistema (chromium, ffmpeg, git, openssl)
RUN apk add --no-cache \
    chromium \
    ffmpeg \
    git \
    openssl \
    nss \
    freetype \
    harfbuzz \
    ca-certificates \
    ttf-freefont \
    curl

# Puppeteer usa o Chromium do sistema
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

WORKDIR /app

# Copia dependências primeiro (aproveita cache do Docker)
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copia o restante do código
COPY . .

# Compila o TypeScript
RUN npm run build

EXPOSE 3000

# Roda migrations e sobe o servidor
CMD ["sh", "-c", "npx sequelize db:migrate && node dist/server.js"]