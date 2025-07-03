# Use an official Node.js image as the base
FROM node:20
 
# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./
 
# Copy package files and install serve globally
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the Next.js app
RUN npm run build
 
# Expose port (default is 3000 for serve)
EXPOSE 3000
 
# Serve the static files from the build directory
CMD ["npm", "start"]