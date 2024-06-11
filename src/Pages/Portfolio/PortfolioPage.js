import React from 'react';

const PortfolioPage = ({ portfolioData, setPortfolioDetail }) => {
    const { img, category, projectTitle } = portfolioData;

    return (

        <div className="card card-compact lg:w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Portfolio" className='sm: h-24 md:h-36 lg:h-48' /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center">{category}</h2>
                <p>{projectTitle}</p>
                <div className='text-end'>
                    <label
                        htmlFor="portfolio-detail-modal"
                        onClick={() => setPortfolioDetail(portfolioData)}
                        className="btn btn-sm text-white font-bold bg-gradient-to-r from-primary to-accent"
                    >Project Detail</label>

                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;