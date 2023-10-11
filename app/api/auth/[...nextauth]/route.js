// import { useState } from "react";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@/utils/database";
import Brand from "@/models/brand";
import { randomBytes } from "crypto";
export const dynamic = "force-dynamic";
// import { uploadBrandData } from "@/components/query/BrandHandler.jsx";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      // Fetch the data from the database when the user signs in
      await connectToDB();

      const user = await Brand.findOne({ email: session.user.email });

      // If the user is found, add the linksArray to the session object
      if (user) {
        session.user.id = user._id.toString();
        session.user.links = user.links;
      }

      return session;
    },
    async signIn({ profile }) {
      try {
        await connectToDB();
        // // Check if the user exists in the database
        const userExists = await Brand.findOne({ email: profile.email });
        // If the user doesn't exist, create a new user record in the database
        if (!userExists) {
          const id = profile.name.replace(" ", "").toLowerCase();
          // Function to generate a random string of given length
          const generateRandomString = (length) => {
            return randomBytes(length).toString("hex").slice(0, length);
          };
          // Function to check if the username is taken
          const isIdTaken = async (idToCheck) => {
            const existingUserWithId = await Brand.findOne({
              id: idToCheck,
            });
            return !!existingUserWithId;
          };
          // Check if the username is already taken
          let modifiedId = id;
          let counter = 1;
          while (await isIdTaken(modifiedId)) {
            modifiedId = `${id}${generateRandomString(5)}_${counter}`;
            counter++;
          }
          // Create a new brand
          const brandData = {
            id: modifiedId,
            name: profile.name,
            email: profile.email,
            image: profile.picture,
            countdowns: [],
          };
          const newBrand = new Brand(brandData);
          await newBrand.save();
        }
        // Return true to indicate successful sign-in
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
