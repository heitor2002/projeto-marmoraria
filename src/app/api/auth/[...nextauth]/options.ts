import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "email", type: "text", placeholder: "email@mail.com" },
        password: { label: "Password", type: "password" },
      },

      authorize(credentials, req) {
        const user = {
          id: "123",
          name: "Heitor",
          email: "wix@gmail.com",
          password: "123",
        };

        if (
          user &&
          user?.email === credentials?.email &&
          user?.password === credentials?.password
        ) {
          return user;
        }

        return null;
      },
    }),
  ],
};
