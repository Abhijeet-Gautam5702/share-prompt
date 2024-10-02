"use client";

import React, { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="">
      {data.map((prompt) => (
        <PromptCard
          key={prompt._id}
          post={prompt}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (e) => {};

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/prompt/get-prompts");
        const data = await response.json();

        setPrompts(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex-grow flex flex-row justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          className="search_input peer"
          value={searchText}
          onChange={handleSearchTextChange}
          placeholder="Search for username or tag"
          required
        />
      </form>

      {/* All Prompts */}
      {searchText ? (
        <PromptCardList data={data} handleTagClick={() => {}} />
      ) : (
        <PromptCardList data={prompts} handleTagClick={() => {}} />
      )}
    </section>
  );
};

export default Feed;
