FROM node:alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY frontend/package.json /app/package.json
RUN npm install
COPY frontend /app
RUN npm run build

# production environment
FROM nginx:1.17.8-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]