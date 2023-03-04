import axios from "axios";
import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials) {
        const res = await axios.post(`${process.env.APP_URL}/api/auth/signin`, credentials);
        const user = res.data;
        if (user)
          return user;
        else
          throw '/auth/signin?i=1';
      }
    })
  ],
  session: {
    jwt: true,
  },

  jwt: {
    secret: process.env.JWT_TOKEN
  },

  database: process.env.DATABASE_URL,
}

export default NextAuth(authOptions)