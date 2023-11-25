import React from "react";

type ExplanationProps = {
    t: any
}
const Explanation : React.FC<ExplanationProps> = ({t}) => {
    return (
        <div className="card max-w-full overflow-auto">
            <h1 className="text-xl font-bold">{t('explanation_title')}</h1>
            <p>{t('explanation_text_1')}</p>
            <p>{t('explanation_text_1')}</p>
        </div>
    )
}

export default Explanation
