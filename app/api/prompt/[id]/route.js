import Prompt from "@/models/prompt.models";
import connectToDB from "@/utils/database";

// Read a specific prompt
export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const prompt = await Prompt.findById(params.id);
    if (!prompt) {
      return new Response("NO PROMPT FOUND", { status: 404 });
    }
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response(`COULD NOT GET USER PROMPTS FROM THE DATABASE`, {
      status: 500,
    });
  }
};

export const POST = async (req, { params }) => {
  try {
    const { prompt, tag } = await req.json();
    await connectToDB();
    console.log(prompt, " -- ", tag);
    const updatedPrompt = await Prompt.findByIdAndUpdate(params.id, {
      prompt,
      tag,
    });
    if (!updatedPrompt) {
      return new Response("COULD NOT UPDATE PROMPT", { status: 500 });
    }
    return new Response(JSON.stringify(updatedPrompt), { status: 200 });
  } catch (error) {
    return new Response(`COULD NOT UPDATE PROMPT`, { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();
    await Prompt.findByIdAndDelete(params.id);
    return new Response("PROMPT DELETED SUCCESSFULLY", { status: 200 });
  } catch (error) {
    return new Response("COULD NOT DELETE PROMPT", { status: 500 });
  }
};
