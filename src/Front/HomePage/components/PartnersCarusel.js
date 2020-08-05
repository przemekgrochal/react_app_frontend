import React, { useEffect } from 'react'
import $ from 'jquery';
import  '../../layouts/UtilitiesComponents/Slick';
import '../style/PartnersCarusel.scss';

const PartnersCarusel = () => {

    useEffect(() => {
        $('.customer-logos').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            arrows: false,
            dots: false,
            pauseOnHover: true,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 3
                }
            }]
        });    
    });

    return (
        <section className="container home-page-partners-carusel">
            <h2>Our  Partners</h2>
            <div className="customer-logos slider">
                <div className="slide"><img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg"/></div>
                <div className="slide"><img src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg"/></div>
                <div className="slide"><img src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg"/></div>
                <div className="slide"><img src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg"/></div>
                <div className="slide"><img src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg"/></div>
                <div className="slide"><img src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg"/></div>
                <div className="slide"><img src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg"/></div>
                <div className="slide"><img src="https://image.freepik.com/free-vector/retro-label-on-rustic-background_82147503374.jpg"/></div>
            </div>
        </section>
    );
}

export default PartnersCarusel;