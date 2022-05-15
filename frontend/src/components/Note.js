import React from "react";

export default function Note(props) {
  const { title, content } = props;

  return (
    <div className="w-full max-w-md rounded overflow-hidden shadow-md">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
    </div>
  );
}
