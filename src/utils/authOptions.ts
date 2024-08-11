import NextAuth, { NextAuthOptions } from "next-auth";

import GithubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [],
  pages : {
    // signIn : "/login"
  },

  // secret: process.env.NEXTAUTH_SECRET,

};

export default NextAuth(authOptions);
