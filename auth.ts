import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const {
  handlers,
  signIn,
  signOut,
  auth,
} = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret:
        process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ profile }) {
      return (
        profile?.email ===
        "ayush9123288616@gmail.com"
      );
    },
  },

  pages: {
    signIn: "/login",
  },
});