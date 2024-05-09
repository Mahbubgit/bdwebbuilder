import React from 'react';
// import PortfolioDetail from './PortfolioDetail';
// import { useNavigate } from 'react-router-dom';

const PortfolioPage = ({ portfolioData, setPortfolio }) => {
    const { _id, img, projectURL, category, projectTitle } = portfolioData;
    // const navigate = useNavigate();

    const btnProjectDetail = () => {
        fetch(`http://localhost:5000/portfolioDetail/${_id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log('portfolio data: ', data);
                // setPortfolioDetial(_id);
                // if (data.success) {
                //     navigate('/portfolioDetail');
                // }
                // setPortfolioDetial(data);
                // <PortfolioDetail
                //     portfolioData={portfolioData}
                // ></PortfolioDetail>
            });
    };

    return (

        <div className="card card-compact lg:w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Portfolio" className='sm: h-24 md:h-36 lg:h-48' /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center">{category}</h2>
                <p>{projectTitle}</p>
                <div className="card-actions justify-end">
                    <a className="btn btn-sm text-white font-bold bg-gradient-to-r from-primary to-secondary" href='portfolioDetail'>Detail</a>
                    <button onClick={btnProjectDetail(_id)} className="btn btn-sm btn-primary">Project Detail</button>
                    <a className="btn btn-sm text-white font-bold bg-gradient-to-r from-primary to-secondary" href={projectURL} target="_blank" rel='noreferrer'>View Website</a>
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;