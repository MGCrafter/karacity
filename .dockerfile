# Verwende eine schlanke Node.js-Version
FROM node:18-alpine

# Setze das Arbeitsverzeichnis
WORKDIR /app

# Kopiere die package.json und package-lock.json
COPY package*.json ./

# Installiere die Abhängigkeiten
RUN npm install

# Kopiere den Rest des Projekts
COPY . .

# Baue die Anwendung (für Production)
RUN npm run build

# Starte Next.js im Development-Modus (falls nötig, für Dev-Build)
CMD ["npm", "run", "dev"]