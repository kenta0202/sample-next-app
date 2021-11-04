import React from "react";

export const Heading = ({ title, tools, feature }) => {
  return (
    <div className="mt-8 ml-1">
      <div className="mb-2 text-lg font-medium">
        <span className="mr-2 text-base ">●</span>
        {title}
      </div>
      <div className="ml-4">
        <div className="">
          <span className="mr-2 ">Tools:</span>
          {tools}
        </div>
        <div className="">
          <span className="mr-2 ">Feature:</span>
          {feature}
        </div>
      </div>
    </div>
  );
};
