
# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies first (better cache)
COPY package*.json ./
RUN yarn install

# Copy rest of the code
COPY . .

# Build the app
RUN yarn build

# Expose port used by NestJS
EXPOSE 4000

# Start the NestJS app
CMD ["node", "dist/main"]

