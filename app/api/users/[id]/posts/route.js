import Prompt from "@/models/prompt.models";
import connectToDB from "@/utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({
      creator: params.id,
    }).populate("creator"); // .populate("creator") populates the creator field (using the Object-id) by performing an aggregation pipeline automatically
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response(`COULD NOT GET USER PROMPTS FROM THE DATABASE`, {
      status: 500,
    });
  }
};
