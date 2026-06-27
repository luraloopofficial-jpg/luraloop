import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  pages: {
    // We handle our own UI using AuthOverlay, but we map standard sign-in just in case
    signIn: '/',
  },
  callbacks: {
    async session({ session, token }) {
      // Optional: attach more token data to session if needed
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET || 'fallback-secret-for-development'
})

export { handler as GET, handler as POST }
