FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install && yarn build
EXPOSE 4000
CMD ["node", "dist/main"]
