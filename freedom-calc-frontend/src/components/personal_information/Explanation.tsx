import React from "react";
import GuideDocument from "./Guide/GuideDocument";

type ExplanationProps = {
  t: any;
};

const Explanation: React.FC<ExplanationProps> = () => {
  return (
    <div className="card max-w-full p-5 overflow-auto">
      <GuideDocument />
    </div>
  );
};

export default Explanation;
