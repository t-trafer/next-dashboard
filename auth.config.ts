import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      const isWebVitals = nextUrl.pathname.startsWith('/webVitals');
      if (isWebVitals) {
        // public path
        return true;
      } else if (isOnDashboard) {
        // protected path
        return isLoggedIn;
      } else if (isLoggedIn) {
        // redirect to dashboard for invalid paths @loggedIn
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
