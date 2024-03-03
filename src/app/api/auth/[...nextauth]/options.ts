import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const nextAuthOptions: NextAuthOptions = {
    secret: process.env.SECRET_KEY_JSON_WEB_TOKEN,
    providers: [
      CredentialsProvider({
        name: "credentials",
        credentials: {
          email: { label: "email", type: "text" },
          password: { label: "password", type: "password" },
        },
        async authorize(credentials, req) {
          const response = await fetch(`${process.env.NEXT_AUTH_URL}api/users`, {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          });
  
          const user = await response.json();
  
          if (user && response.ok) {
            return user;
          }
  
          return null;
        },
      }),
    ],
    pages: {
      signIn: "/login",
    },
    callbacks: {
      async jwt({ token, user }) {
        user && (token.user = user);
        return token;
      },
  
      async session({ session, token }) {
        session.user = token.user as any;
        return session;
      },
    },
  };