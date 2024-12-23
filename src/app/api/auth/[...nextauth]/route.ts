import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // Include the user's ID in the session object
      if (token?.sub) {
        (session.user as { id: string }).id = token.sub;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
    error: "/auth/error", 
  },
  secret: process.env.NEXTAUTH_SECRET, // Add a secret for signing cookies
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
