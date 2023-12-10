import React from "react";

type ExplanationProps = {
    t: any
}
const Explanation : React.FC<ExplanationProps> = ({t}) => {
    return (
        <div className="card max-w-full p-5 overflow-auto">
            <h1 className="text-4xl font-bold">{t('Life chart')}</h1>
            <p className="text-left text-xl">{t('The life chart calculation project is used to develop methods to calculate the financial freedom point by using Markowitz`s Portfolio Theory. In this web application, the user can input their data(personal information, income) and their prediction so that when they go through five steps, they can know their predicted financial freedom point.')}</p>
        </div>
    )
}

export default Explanation
