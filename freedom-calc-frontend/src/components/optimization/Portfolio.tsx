import React from "react";
import StockTable from "./StockTable";
import { PortfolioClass } from "../../models/optimization/PortfolioClass";

type PortfolioProps = {
  t: any;
  portfolio: PortfolioClass;
  currency: string;
};
const Portfolio: React.FC<PortfolioProps> = ({ t, portfolio, currency }) => {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <div>
      <div className="flex flex-col gap-2  mb-4">
        <div className="flex flex-row justify-between mt-4">
          <p>{t("portfolio_growth")}</p>
          <p>{(portfolio.mean * 100).toPrecision(2) + " % (CAGR)"}</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>{t("portfolio_risk")}</p>
          <p>{portfolio.std + " " + currency}</p>
        </div>
      </div>
      <StockTable t={t} portfolio={portfolio} />
      {/*<div className="tabs tabs-boxed gap-1">
                <input type="radio" id="tab-13" index="tab-5" className="tab-toggle" defaultChecked onClick={() => {setActiveTab(0)}}/>
                <label htmlFor="tab-13" className="tab">{t('table')}</label>

                <input type="radio" id="tab-14" index="tab-5" className="tab-toggle" onClick={() => {setActiveTab(1)}}/>
                <label htmlFor="tab-14" className="tab">{t('pie_chart')}</label>

                <input type="radio" id="tab-15" index="tab-5" className="tab-toggle" onClick={() => {setActiveTab(2)}}/>
                <label htmlFor="tab-15" className="tab">{t('radar')}</label>
            </div>
            <div className="max-w-full">
                {
                    activeTab === 0 ? <StockTable t={t} portfolio={portfolio}/>
                        : activeTab === 1 ? <PieChartPortfolio />
                            : activeTab === 2 ? <RadarChartPortfolio/>
                                : <></>
                }
                */}
    </div>
  );
};

export default Portfolio;
