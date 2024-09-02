import React from "react";

interface ContentProps {
  children: JSX.Element;
  title: string;
}
const Content = ({ children, title }: ContentProps) => {
  return (
    <div className="my-4">
      <h2 className="text-xl font-medium mb-3">{title}</h2>
      {children}
    </div>
  );
};

export default Content;
