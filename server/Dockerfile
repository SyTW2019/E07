FROM node:12.12.0
LABEL author="BANANAT Team"
RUN apt-get update
WORKDIR /app
COPY /controllers ./controllers
COPY /models ./models
COPY /routes ./routes
COPY /token ./token
COPY * ./
RUN npm install 
CMD ["node", "index.js"]