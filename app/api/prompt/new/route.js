import Prompt from "@/models/prompt.models";
import connectToDB from "@/utils/database";

export const POST = async (req, res) => {
  const { prompt, tag, userId } = await req.json();
  try {
    await connectToDB();
    const newPrompt = await Prompt.create({
      creator: userId,
      prompt,
      tag,
    });
    return new Response(JSON.stringify(newPrompt), { status: 200 });
  } catch (error) {
    return new Response("FAILED TO CREATE PROMPT", { status: 500 });
  }
};
