# Express TypeScript Server

A Node.js server built with Express and TypeScript, following a 3-tier architecture pattern.

## Features

- Express.js with TypeScript
- HTTPS support
- 3-tier architecture (Controller-Service-Repository)
- Error handling middleware
- Environment variable configuration
- CORS enabled
- Security headers with Helmet

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create SSL certificates:

   - Create an `ssl` directory in the root folder
   - Add your SSL certificates:
     - `private.key`
     - `certificate.crt`

3. Create a `.env` file in the root directory with the following variables:

```
PORT=3000
NODE_ENV=development
```

## Development

Run the development server:

```bash
npm run dev
```

## Production

Build the project:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
src/
├── controllers/     # Request handlers
├── services/        # Business logic
├── repositories/    # Data access
├── middleware/      # Custom middleware
├── types/          # TypeScript interfaces
├── routes/         # Route definitions
└── index.ts        # Application entry point
```

## API Endpoints

The server includes example endpoints at `/api/example`:

- GET `/api/example` - Get all examples
- GET `/api/example/:id` - Get example by ID
- POST `/api/example` - Create new example
- PUT `/api/example/:id` - Update example
- DELETE `/api/example/:id` - Delete example

## Adding WebSocket Support

To add WebSocket support later, you can:

1. Install the required dependencies:

```bash
npm install ws @types/ws
```

2. Create a WebSocket service in the services directory
3. Initialize WebSocket server in the main application file
4. Add WebSocket event handlers as needed
