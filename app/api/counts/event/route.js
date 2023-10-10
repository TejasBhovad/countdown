import Count from "@/models/count";
import Brand from "@/models/brand";
import { connectToDB } from "@/utils/database";

export const dynamic = "force-dynamic";

export const POST = async (req, res) => {
  try {
    const { id, brand_id } = await req.json();
    console.log("=> Fetching count with brand id: " + id);

    // Connect to the database
    await connectToDB();

    // Find the count by ID
    // const counts = await Count.find({ id });

    //   filter the counts by brand_id
    // const count = counts.filter((count) => count.brand_id === brand_id);
    const count = await Count.findOne({ id, brand_id });
    if (!count) {
      return new Response(JSON.stringify({ error: "Count not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(count), { status: 200 });
  } catch (error) {
    console.error("Error fetching count:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
};
