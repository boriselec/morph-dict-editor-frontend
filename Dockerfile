# build environment
FROM node:12-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run build && \
    rm -rfv /app/build/env.js

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
ENV backend_url "undefined"
EXPOSE 80
CMD > /usr/share/nginx/html/env.js && \
    echo "var backendUrl = '$backend_url'" >> /usr/share/nginx/html/env.js && \
    nginx -g "daemon off;";
