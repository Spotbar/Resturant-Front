

FROM node:19-alpine3.16

WORKDIR /RESTURANT

COPY package*.json .

RUN yarn install

COPY . .

RUN yarn run build

FROM nginx:1.19

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=build //RESTURANT/build /usr/share/nginx/html