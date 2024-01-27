import React from 'react';
import footer from '../../img/footer.png';

const Footer = () => {
    return (

        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }} className="p-10">

            <div className='footer'>
                <aside>
                    <h2 className='text-xl lg:text-3xl'>BD Web Builder</h2>
                    {/* <img className="lg:w-1/3 md:w-1/4 sm:w-1/5" src={logo} alt="" /> */}
                    <p>Providing reliable web services since 2023</p>
                    <p>Pa-2/1, South Badda, <br />
                        Gulshan-1, Dhaka <br />
                        Bangladesh  </p>
                    <br />
                    <p>Phone: +8801717247943, +8801533620350</p>
                    <p>Email: info@example.com</p>
                </aside>
                <div>
                    <header className="footer-title">Useful Links</header>
                    <a className="link link-hover" href='/'>Home</a>
                    <a className="link link-hover" href='about'>About us</a>
                    <a className="link link-hover" href='services'>Services</a>
                    <a className="link link-hover" href='contact'>Contact Us</a>
                </div>
                <div>
                    <header className="footer-title">Our Services</header>
                    <a className="link link-hover" href='services'>Web Development</a>
                    <a className="link link-hover" href='services'>App Development</a>
                    <a className="link link-hover" href='services'>Software Development</a>
                </div>
                <div>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover" href='tos'>Terms of service</a>
                    <a className="link link-hover" href='privacy'>Privacy policy</a>
                    <a className="link link-hover" href='terms'>Terms of use</a>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p>Copyright © 2024 - All right reserved by BD Web Builder</p>
            </div>
        </footer>
    );
};

export default Footer;