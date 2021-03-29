# develop stage
FROM node:lts-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g @quasar/cli
COPY . .

# build stage
FROM develop-stage as build-stage
RUN quasar build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]