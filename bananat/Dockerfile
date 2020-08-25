FROM teracy/angular-cli as angular 
LABEL author="BANANAT Team"
WORKDIR /app
COPY src/ src/
COPY * ./
RUN apt-get update && npm install && npm run build 

FROM nginx:1.17.6 
COPY default.conf /etc/nginx/conf.d/
COPY --from=angular /app/dist/bananat /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]