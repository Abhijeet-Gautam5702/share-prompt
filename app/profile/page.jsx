"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@/components/Profile";

const ProfilePage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [myPosts, setMyPosts] = useState([]);

  const handleDelete = async (post) => {
    try {
      const response = await fetch(`/api/prompt/${post._id}`, {
        method: "delete",
      });
      setMyPosts((prev) => {
        const newList = prev.filter((prompt) => prompt._id !== post._id);
        return newList;
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEdit = async (post) => {
    router.push(`/update-prompt?postId=${post._id}`);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`api/users/${session?.user.id}/posts`);
        const data = await response.json();

        setMyPosts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [session]);

  return (
    <Profile
      name="My Name"
      desc="My Description"
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default ProfilePage;
