# Use the official Node.js image as a base
FROM node:18-alpine

# Install pnpm globally
RUN npm install -g pnpm

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and lock file first for better caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Copy the entire project into the working directory inside the container
COPY . .

# Expose the port on which Next.js will run
EXPOSE 3000 

# Build the Next.js app
RUN pnpm build

# Start the Next.js app
CMD ["pnpm", "start"]

