import Feed from '@/components/Feed';
import React from 'react';

const Home = () => {
  return (
    <div className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Blog
        <br className="max-md:hidden" />
      </h1>
      <p className="desc text-center">
        Whether you're a novice blogger seeking inspiration or a seasoned writer
        in search of fresh ideas, Blog Prompt is the perfect tool to assist you
        in creating compelling content.
      </p>
      <Feed />
    </div>
  );
};

export default Home;
