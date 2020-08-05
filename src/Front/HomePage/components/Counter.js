import React, { useEffect } from 'react'
import '../style/Counter.scss';
import $ from 'jquery';

const Counter = () => {

    useEffect(() => {
        $('.counter').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
            });
        });    
    });

    return (
        <section className="container home-page-counter">  
            <div className="">
                <div className="row">
                    <div className="four col-md-3">
                        <div className="counter-box colored"> <i className="fa fa-thumbs-o-up"></i> <span className="counter">2147</span>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                    <div className="four col-md-3">
                        <div className="counter-box"> <i className="fa fa-group"></i> <span className="counter">3275</span>
                            <p>Registered Members</p>
                        </div>
                    </div>
                    <div className="four col-md-3">
                        <div className="counter-box"> <i className="fa fa-shopping-cart"></i> <span className="counter">289</span>
                            <p>Available Products</p>
                        </div>
                    </div>
                    <div className="four col-md-3">
                        <div className="counter-box"> <i className="fa fa-user"></i> <span className="counter">1563</span>
                            <p>Saved Trees</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Counter;