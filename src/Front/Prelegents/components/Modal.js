import React from 'react';
import '../style/Prelegents.scss';
import avatar from '../img/avatar.png';

const Modal = (props) => {
    
    return (
        <>
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <img className="card-img-top" src={avatar} alt="Card image cap"/>
                            {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button> */}
                        </div>
                        <div className="modal-body">
                            <h5 className="modal-title" id="exampleModalLongTitle">{props.name}</h5>
                            {props.description}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Zamknij</button>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default Modal;