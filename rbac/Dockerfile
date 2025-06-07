FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 5001  # For oauth, use 5002 for rbac
CMD ["node", "index.js"]
