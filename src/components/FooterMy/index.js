import React from 'react';

function FooterMy() {
    return (
        <footer className="footer bg-warning text-primary py-3 font-weight-bold">
            <div className="container">
                <div className="row">
                    <div className="footer__item col-6">
                        <a className="footer__link link" href="tel:+79677464836">+7 967 746 48 36</a>
                    </div>
                    <div className="footer__item col-6 text-right">
                        <span>Country, City, Street 123</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterMy;