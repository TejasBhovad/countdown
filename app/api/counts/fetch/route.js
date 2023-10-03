import Count from "@/models/count";
import { connectToDB } from "@/utils/database";

export const dynamic = "force-dynamic";

export const POST = async (req, res) => {
  try {
    const { id } = await req.json();
    console.log("=> Fetching count with id: " + id);

    // Connect to the database
    await connectToDB();

    // Find the count by ID
    const count = await Count.findOne({ id });

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
