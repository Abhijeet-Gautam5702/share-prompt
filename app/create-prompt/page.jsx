"use client";

import Form from "@/components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreatePrompt = () => {
  const {data:session}=useSession();
  const router=useRouter()

  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const createPost = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "post",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });

      if(response.ok){
        router.push("/");
      }
      
    } catch (error) {
      console.log(`CREATE POST FAILED`, error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      submitting={submitting}
      handleSubmit={createPost}
      setPost={setPost}
    />
  );
};

export default CreatePrompt;
