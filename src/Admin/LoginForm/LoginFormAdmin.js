import React, {  useState } from 'react'
import Button from 'react-bootstrap/Button';
import LogIn from '../../Auth/LogIn';

const LoginForm = () => {

    const [userEmail, setUserEmail] = useState(null);
    const [userPassword, setUserPassword] = useState(null);
    
    const handleSubmit = (e) => {

        e.preventDefault();
       
        if(userEmail && userPassword) {
            if(LogIn(userEmail, userPassword) === true){
                window.location="/panel/dashboard";
            }
        }
    }

    return (
        <>  
            <div style={{maxWidth:"600px", marginLeft:"auto", marginRight: "auto"}}>  

                <h2>Zaloguj się do Panelu Administracyjnego</h2>

                <hr></hr>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Adres e-mail</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="wpisz adres e-mail..."  onChange={ (e) => setUserEmail(e.target.value)}/>
                        <small id="emailHelp" className="form-text text-muted">Zwróć uwagę na poprawność adresu e-mail.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Hasło</label>
                        <input type="password" className="form-control" id="password" autoComplete="on" placeholder="wpisz hasło..." onChange={ (e) => setUserPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Zaloguj</button>
                </form>

                <div style={{marginTop: "20px", paddingTop: "10px", borderTop: "1px solid #ced4da"}}>
                    <Button style={{marginTop:"25px"}} variant="light" href="/">Powrót do strony głównej</Button>
                </div>

            </div>
        </>
    );
}

export default LoginForm;