# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the project dependencies
RUN npm install --production

# Copy the rest of the project files to the container
COPY . .

# Expose the port that your application will run on
EXPOSE 5000

# Define the command to start your Node.js app
CMD ["npm", "start"]
