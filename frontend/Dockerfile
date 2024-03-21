FROM node:14

# Set the working directory in the Docker container
WORKDIR /app/frontend/

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

RUN npm install

# Copy the rest of the application's code to the working directory
COPY . ./

EXPOSE 8080

# The command to run the app using npm
CMD ["npm", "run", "serve"]
