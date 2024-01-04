# Schritt 1: Erstellen eines 'builder'-Stadiums
FROM node:latest as builder

# Setzen des Arbeitsverzeichnisses im Container
WORKDIR /app

# Kopieren der 'package.json' und 'package-lock.json' (falls vorhanden)
COPY package*.json ./

# Installieren von Projekt-Abhängigkeiten
RUN npm install

# Kopieren des Projektquellcodes
COPY . .

# TypeScript-Kompilierung und Erstellen der Produktions-Build der React-App
RUN npm run build

# Schritt 2: Bereitstellen der Anwendung mit einem Nginx-Server
FROM nginx:stable-alpine

# Kopieren der Build-Artefakte vom 'builder'-Stadium
COPY --from=builder /app/build /usr/share/nginx/html

# Standard-Port für Nginx
EXPOSE 80

# Starten von Nginx im Vordergrund
CMD ["nginx", "-g", "daemon off;"]
