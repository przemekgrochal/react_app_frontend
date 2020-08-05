import React from 'react';
import LogOutButton from '../../CustomComponent/LogOutButton';
import '../style/TopBarAdmin.scss';

const TopBarAdmin = () => {

    return (
        <>
            <div className="pos-f-t">
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                    <h4 className="text-white">Panel administratora</h4>
                    <a href="/panel/dashboard" type="button" className="btn btn-secondary" >Przejdz do panelu admina</a>
                    </div>
                </div>
                <nav className="navbar navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <LogOutButton />
                </nav>
            </div> 
        </>
    );
}

export default TopBarAdmin;