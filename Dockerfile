# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the project files
COPY . .

# Expose port 5000
EXPOSE 5000

# Define the command to run your app
CMD ["node", "server.js"]
