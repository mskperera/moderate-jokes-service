# Use the official Node.js image with Alpine Linux
FROM node:14-alpine

# Create a directory for the application
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the application runs on
EXPOSE 8001

# Command to start the application
CMD ["node", "server.js"]



# commands
# docker build -t moderate-jokes-microservice .

# docker run -d -p 8001:8001 moderate-jokes-microservice

# docker ps