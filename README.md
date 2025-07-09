# WORKSY - Real-Time Communication Platform Backend

A robust and scalable backend service for a real-time communication platform built with Node.js, TypeScript, Prisma, and Socket.IO. This platform supports workspaces, channels, direct messaging, video calls, file sharing, and more.

## Features

- 👥 **User Management**

  - Authentication (JWT, OAuth)
  - User profiles and settings
  - Email verification
  - Password reset functionality

- 🏢 **Workspace Management**

  - Create and manage workspaces
  - Invite members
  - Role-based access control
  - Workspace settings

- 💬 **Communication**

  - Real-time messaging
  - Channels and direct messages
  - Message reactions and mentions
  - File sharing
  - Message history

- 📹 **Video Calls**

  - Channel video calls
  - Direct video calls
  - Screen sharing
  - In-call messaging

- 🔔 **Notifications**
  - Real-time notifications
  - Push notifications (Firebase)
  - Email notifications
  - Mention notifications

## Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Real-time Communication**: Socket.IO
- **Authentication**: JWT, OAuth
- **Push Notifications**: Firebase Cloud Messaging
- **File Storage**: Firebase Storage
- **Email Service**: Custom email service

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- PostgreSQL
- npm or yarn

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/worksy"

# JWT
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=90d

# Firebase
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY=your_private_key
FIREBASE_CLIENT_EMAIL=your_client_email

# OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Email
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
```

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd worksy
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Generate Prisma client:

   ```bash
   npx prisma generate
   ```

4. Run database migrations:

   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

- `/prisma` - Database schema and migrations
- `/src`
  - `/config` - Configuration files
  - `/constants` - Constant values and templates
  - `/controllers` - Request handlers
  - `/interfaces` - TypeScript interfaces
  - `/middlewares` - Express middlewares
  - `/routes` - API routes
  - `/services` - Business logic
  - `/socket` - Socket.IO handlers
  - `/utils` - Utility functions
  - `/validators` - Request validation

## API Documentation

The API is organized around REST principles. We use standard HTTP response codes, authentication, and verbs.

### Main Endpoints:

- `/api/auth` - Authentication routes
- `/api/workspaces` - Workspace management
- `/api/channels` - Channel operations
- `/api/messages` - Message handling
- `/api/users` - User management
- `/api/files` - File operations
- `/api/meetings` - Video call management

For detailed API documentation, please refer to our API documentation (add link to your API docs).

## Socket Events

The application uses Socket.IO for real-time features. Main events include:

- Channel messages
- Direct messages
- Typing indicators
- Online presence
- Video call signaling
- Screen sharing

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please contact (add your support contact information).
