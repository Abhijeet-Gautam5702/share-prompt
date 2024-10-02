import User from "@/models/user.models";
import connectToDB from "@/utils/database";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session: async ({ session }) => {
      try {
        // get the user-data from the database
        const sessionUser = await User.findOne({ email: session.user.email });

        // update the id of the user-session
        session.user.id = sessionUser._id.toString();

        return session;
      } catch (error) {
        console.log(`NEXT-AUTH SESSION FAILED`, error);

        return false;
      }
    },
    signIn: async ({ profile }) => {
      try {
        // attempt to connect to the database
        await connectToDB();

        // console.log("profile = ");
        // console.log(profile)

        // check if user already exists
        const userExists = await User.findOne({ email: profile.email });

        // if not, create a new user
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name,
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.log(`NEXT-AUTH SIGN-IN FAILED`, error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
