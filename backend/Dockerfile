# Use Node.js 20 Alpine version (compatible with find-my-way@9.3.0)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN yarn install

# Copy rest of the code
COPY . .

# Build the NestJS app
RUN yarn build

# Expose port used by NestJS
EXPOSE 4000

# Start the NestJS app
CMD ["node", "dist/main"]
