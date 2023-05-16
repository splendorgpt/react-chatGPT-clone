# Imagen base
FROM node:16-alpine

# Directorio de trabajo
WORKDIR /app

# Copiamos el archivo 'package.json' y 'package-lock.json' (si está disponible)
COPY package.json ./

# Instalamos las dependencias del proyecto
RUN npm install


# Hacemos el 'build' de la aplicación
RUN npm run build

COPY . /app/
