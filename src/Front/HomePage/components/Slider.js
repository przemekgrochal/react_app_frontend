import React from 'react';

const Slider = () => {

    return (
        <section className="container-fliud">  
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" data-interval="3000" data-pause="false">
                <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1" className=""></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2" className=""></li>
                </ol>
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=777&amp;fg=555&amp;text=First slide" alt="Pierwszy slajd [800x400]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16f6879541c%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16f6879541c%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22217.7%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true"/>
                    <div className="carousel-caption d-none d-md-block">
                    <h5><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>Pierwsza etykieta slajdów</font></font></h5>
                    <p><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}><button type="button" className="btn btn-info">Zapisz się na konferencje</button></font></font></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=666&amp;fg=444&amp;text=Second slide" alt="Drugi slajd [800 x 400]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16f6879541d%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16f6879541d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3125%22%20y%3D%22217.7%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true"/>
                    <div className="carousel-caption d-none d-md-block">
                    <h5><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>Pierwsza etykieta slajdów</font></font></h5>
                    <p><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}><button type="button" className="btn btn-info">Zapisz się na konferencje</button></font></font></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide" alt="Trzeci slajd [800x400]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16f6879541e%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16f6879541e%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22217.7%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true"/>
                    <div className="carousel-caption d-none d-md-block">
                    <h5><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>Pierwsza etykieta slajdów</font></font></h5>
                    <p><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}><button type="button" className="btn btn-info">Zapisz się na konferencje</button></font></font></p>
                    </div>
                </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only"><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>Poprzedni</font></font></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only"><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>Kolejny</font></font></span>
                </a>
            </div>
        </section>
    );
}

export default Slider;