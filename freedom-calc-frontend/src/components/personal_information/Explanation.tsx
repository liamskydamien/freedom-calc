import React from "react";

type ExplanationProps = {
    t: any
}

const Explanation : React.FC<ExplanationProps> = ({t}) => {
    return (
        <div className="card max-w-full p-5 overflow-auto">
            <h1 className="text-4xl font-bold">{t("title")}</h1>
            <p className="text-left text-xl">{t("explaination")}</p>
        </div>
    )
}

export default Explanation
