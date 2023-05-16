# Imagen base
FROM node:16-alpine

# Directorio de trabajo
WORKDIR /server
# Copiamos el archivo 'package.json' y 'package-lock.json' (si está disponible)
COPY package.json ./

# Instalamos las dependencias del proyecto
RUN npm install

# Copiamos el código fuente de la aplicación
COPY . .

# Comando para iniciar la aplicación
CMD [ "node", "index.js" ]
