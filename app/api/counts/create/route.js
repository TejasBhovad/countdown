import { connectToDB } from "@/utils/database";
import Count from "@/models/count";
export const dynamic = "force-dynamic";

export const POST = async (req, res) => {
  const { name, id, brand_id, desc, time, date, image, categories, count } =
    await req.json();
  try {
    await connectToDB();
    const existingCount = await Count.findOne({ id });
    if (existingCount) {
      console.log("=> Count already exists");
      // UPDATES THE BRAND INFO
      existingCount.name = name;
      existingCount.id = id;
      existingCount.brand_id = brand_id;
      existingCount.desc = desc;
      existingCount.time = time;
      existingCount.date = date;
      existingCount.image = image;
      existingCount.categories = categories;
      existingCount.count = count;

      await existingCount.save();
      return new Response(JSON.stringify(existingCount), { status: 200 });
    } else {
      const newCount = new Count({
        name,
        id,
        brand_id,
        desc,
        time,
        date,
        image,
        categories,
        count,
      });
      await newCount.save();
      return new Response(JSON.stringify(newCount), { status: 200 });
    }
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
