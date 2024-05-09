import React, { useEffect, useState } from 'react';
import PortfolioPage from './PortfolioPage';
// import PortfolioDetail from './PortfolioDetail';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);
    // const [portfolioDetail, setPortfolioDetial] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/showPortfolio')
            .then(res => res.json())
            .then(data => setPortfolio(data));
    }, []);

    return (
        <section>
            <div className='flex justify-center'>
                <div className='p-2'>
                    <h2 className='text-primary text-xl lg:text-2xl font-bold text-center'>Portfolio</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 m-5'>
                {
                    portfolio.map(portfolioData => <PortfolioPage
                        key={portfolioData._id}
                        portfolioData={portfolioData}
                        setPortfolio={setPortfolio}
                        // setPortfolioDetial={setPortfolioDetial}
                    ></PortfolioPage>)
                }
            </div>
            {/* {
                portfolioDetail && <PortfolioDetail
                    portfolioDetail={portfolioDetail}
                ></PortfolioDetail>
            } */}
        </section>
    );
};

export default Portfolio;