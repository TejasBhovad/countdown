import { connectToDB } from "@/utils/database";
import Brand from "@/models/brand";
export const dynamic = "force-dynamic";

export const POST = async (req, res) => {
  const { name, id, email, image, countdowns } = await req.json();
  try {
    await connectToDB();
    const existingBrand = await Brand.findOne({ id });
    if (existingBrand) {
      console.log("=> Brand already exists");
      // UPDATES THE BRAND INFO
      existingBrand.name = name;
      existingBrand.email = email;
      existingBrand.image = image;
      existingBrand.countdowns = countdowns;
      await existingBrand.save();
      return new Response(JSON.stringify(existingBrand), { status: 200 });
    } else {
      const newBrand = new Brand({ name, email, id, image, countdowns });
      await newBrand.save();
      return new Response(JSON.stringify(newBrand), { status: 200 });
    }
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
