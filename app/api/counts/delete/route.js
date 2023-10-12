import Count from "@/models/count";
import { connectToDB } from "@/utils/database";

export const dynamic = "force-dynamic";

export const DELETE = async (req, res) => {
  try {
    const { id, brand_id } = await req.json();
    console.log("=> Deleting count with ID: " + id + " and brand ID: " + brand_id);

    // Connect to the database
    await connectToDB();

    // Find the count by ID and brand ID, then delete it
    const result = await Count.deleteOne({ id, brand_id });

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ error: "Count not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ message: "Count deleted successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error deleting count:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
};
