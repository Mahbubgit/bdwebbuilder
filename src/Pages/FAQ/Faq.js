import React from 'react';

const Faq = () => {
    return (
        <div className='gap-5'>
            <div className="collapse collapse-arrow border-spacing-2 border">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello One</p>
                </div>
            </div>
            <div className="collapse collapse-arrow border-spacing-2 border">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello Two</p>
                </div>
            </div>
            <div className="collapse collapse-arrow border-spacing-2 border">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello Three</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;