FROM node:lts-alpine3.18 AS builder
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Create a production-ready image
FROM node:lts-alpine3.18

WORKDIR /app

# Copy only necessary files from the build stage
COPY --from=builder /app/dist /app/dist
COPY package*.json ./

# Install production dependencies
RUN npm install --only=production

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
