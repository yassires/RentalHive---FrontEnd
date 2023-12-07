FROM node:18.13.0 as build

WORKDIR /app

COPY package*.json ./

RUN npm install
act us
RUN npm install -g @angular/cli

COPY . .

RUN ng build --configuration=production

FROM nginx:latest

COPY --from=build app/dist/rentalhive /usr/share/nginx/html

EXPOSE 80