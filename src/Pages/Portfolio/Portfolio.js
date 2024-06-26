import React, { useEffect, useState } from 'react';
import PortfolioPage from './PortfolioPage';
import PortfolioDetailModal from './PortfolioDetailModal';
// import PortfolioDetail from './PortfolioDetail';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);
    const [portfolioDetail, setPortfolioDetail] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/showPortfolio')
            .then(res => res.json())
            .then(data => setPortfolio(data));
    }, []);

    return (
        <section>
            <div className='flex justify-center'>
                <div className='p-2'>
                    <h2 className='text-primary text-xl lg:text-2xl font-bold text-center'>পোর্টফোলিও</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 m-5'>
                {
                    portfolio.map(portfolioData => <PortfolioPage
                        key={portfolioData._id}
                        portfolioData={portfolioData}
                        setPortfolio={setPortfolio}
                        setPortfolioDetail={setPortfolioDetail}
                    ></PortfolioPage>)
                }
            </div>
            {
                portfolioDetail && <PortfolioDetailModal
                    portfolioDetail={portfolioDetail}
                ></PortfolioDetailModal>
            }
            {/* {
                portfolioDetail && <PortfolioDetail
                    portfolioDetail={portfolioDetail}
                ></PortfolioDetail>
            } */}
        </section>
    );
};

export default Portfolio;