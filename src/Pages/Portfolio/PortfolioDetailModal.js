import React from 'react';

const PortfolioDetailModal = ({ portfolioDetail }) => {
    const { img, category, client, projectDate, projectURL, projectTitle, description } = portfolioDetail;
    return (
        <div>
            <input type="checkbox" id="portfolio-detail-modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <label htmlFor="portfolio-detail-modal" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                    <div className="hero-content grid items-center text-center justify-center">
                        <img src={img} className="lg:max-w-sm rounded-lg shadow-2xl" alt='' />
                        <div className='ps-2 text-left'>
                            <h2 className='lg: text-xl text-center font-bold mb-2'>Project Information</h2>
                            <p className="font-bold lg:text-md">Category: {category} </p>
                            <p className="font-bold lg:text-md">Client: {client}</p>
                            <p className="font-bold lg:text-md">Date: {projectDate}</p>

                            <p className="text-xl text-gray-500 text-justify">{projectTitle}</p>
                            <p className="py-2 text-justify">{description}</p>
                            <div className='text-end'>
                                <p className="font-bold lg:text-md">
                                    <a className="btn btn-sm text-white font-bold bg-gradient-to-r from-accent to-secondary" href={projectURL} target="_blank" rel='noreferrer'>View Website</a>
                                    {/* Link: <a className='text-primary' href={projectURL} target="_blank" rel='noreferrer'>{projectURL}</a> */}
                                    <label htmlFor="portfolio-detail-modal" className="btn btn-sm text-white font-bold btn-outline btn-accent ms-3">Close</label>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailModal;