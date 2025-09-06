import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utilities/db";
import User from "@/models/User";
import bcrypt from "bcrypt";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connect();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong Credentials.");
            }
          } else {
            throw new Error("User Not Found.");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
    // ...add more providers here
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
