import React from 'react';

const PortfolioDetail = ({portfolioDetail}) => {
    const { img, category, client, projectDate, projectURL, projectTitle, description } = portfolioDetail;

    return (
        <div>
            <h2>This is portfolio detail page. <br />
                {projectTitle}
            </h2>
        </div>
    );
};

export default PortfolioDetail;