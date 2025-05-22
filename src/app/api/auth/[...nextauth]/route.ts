import NextAuth from 'next-auth/next';
import { authOptions } from './options';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// This file should handle both GET and POST requests using the same handler
// GET requests for things like fetching the session (/api/auth/session) or CSRF tokens.
// POST requests for actions like signing in, signing out, or callbacks.