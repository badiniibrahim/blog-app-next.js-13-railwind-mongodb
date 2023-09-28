import React from 'react';
import PromptCard, { Post } from './PromptCard';

type ProfileProps = {
  name: string;
  desc: string;
  data: any;
  handleEdit: (post: any) => void;
  handleDelete: (post: any) => void;
};

const Profile: React.FC<ProfileProps> = ({
  name,
  desc,
  data,
  handleEdit,
  handleDelete,
}) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-center">
        <span className="head_text text-center">{name} Profile</span>
      </h1>
      <p className="desc text-center">{desc}</p>

      <div className="mt-10 prompt_layout">
        {data.map((post: Post) => (
          <PromptCard
            key={post.tag}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
            handleTagClick={() => {}}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
