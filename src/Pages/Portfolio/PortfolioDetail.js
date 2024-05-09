import React from 'react';

const PortfolioDetail = () => {
    // const { _id, projectTitle } = portfolioDetail;
    // const [singlePortfolio, setSinglePortfolio] = useState();

    // useEffect(() => {
    //     fetch(`http://localhost:5000/portfolioDetail/${_id}`, {
    //         method: 'GET',
    //         headers: {
    //             'content-type': 'application/json',
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setSinglePortfolio(data);
    //             console.log('portfolio data: ', data);
    //         })
    // }, [])

    return (
        <div>
            <h2>This is portfolio detail page. <br />
                {/* {_id}{projectTitle} */}
            </h2>
        </div>
    );
};

export default PortfolioDetail;