import React from 'react';
import '../style/ConferencesList.scss';
import Pagination from '../../layouts/UtilitiesComponents/Pagination';

const ConferencesList = () => {

    return (
        <section className="container conferences-list">
            <div className="col-3">
                <div className="box box-solid box-info">
                    <div className="box-header">
                        <h3 className="box-title">Info Solid Box</h3>
                    </div>
                    <div className="box-body">
                        The body of the box
                    </div>
                </div>
            </div>
            <div className="col-9">
                <div className="row row-striped">
                    <div className="col-2 text-right">
                        <h1 className="display-4"><span className="badge badge-secondary">23</span></h1>
                        <h2>OCT</h2>
                    </div>
                    <div className="col-10">
                        <h3 className="text-uppercase"><strong>Ice Cream Social</strong></h3>
                        <ul className="list-inline">
                            <li className="list-inline-item"><i className="fa fa-calendar-o" aria-hidden="true"></i> Monday</li>
                            <li className="list-inline-item"><i className="fa fa-clock-o" aria-hidden="true"></i> 12:30 PM - 2:00 PM</li>
                            <li className="list-inline-item"><i className="fa fa-location-arrow" aria-hidden="true"></i> Cafe</li>
                        </ul>
                        <p>Lorem ipsum dolsit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="row row-striped">
                    <div className="col-2 text-right">
                        <h1 className="display-4"><span className="badge badge-secondary">27</span></h1>
                        <h2>OCT</h2>
                    </div>
                    <div className="col-10">
                        <h3 className="text-uppercase"><strong>Operations Meeting</strong></h3>
                        <ul className="list-inline">
                            <li className="list-inline-item"><i className="fa fa-calendar-o" aria-hidden="true"></i> Friday</li>
                            <li className="list-inline-item"><i className="fa fa-clock-o" aria-hidden="true"></i> 2:30 PM - 4:00 PM</li>
                            <li className="list-inline-item"><i className="fa fa-location-arrow" aria-hidden="true"></i> Room 4019</li>
                        </ul>
                        <p>Lorem ipsum dolsit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="conferences-page-pagination">
                    <Pagination />
                </div>
            </div>
        </section>
    );
}

export default ConferencesList;