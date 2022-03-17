FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
# CMD ["/bin/ls","/app/dist"]
FROM nginx:alpine
COPY --from=node /app/dist/frontend-angular /usr/share/nginx/html