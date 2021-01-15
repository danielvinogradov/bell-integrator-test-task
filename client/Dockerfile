FROM node:12 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/nginx /etc/nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80/tcp
CMD ["nginx", "-g", "daemon off;"]
