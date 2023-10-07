import Brand from "@/models/brand";
import { connectToDB } from "@/utils/database";

export const dynamic = "force-dynamic";

export const POST = async (req, res) => {
  try {
    const { email } = await req.json();
    console.log("=> Fetching brand with id: " + email);

    // Connect to the database
    await connectToDB();

    // Find the brand by ID
    const brand = await Brand.findOne({ email });

    if (!brand) {
      return new Response(JSON.stringify({ error: "Brand not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(brand), { status: 200 });
  } catch (error) {
    console.error("Error fetching brand:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
};
