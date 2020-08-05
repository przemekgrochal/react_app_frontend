import React, { useState, useEffect, useRef } from 'react';
import './style/Register.scss';

const Register = ({match}) => {

    const [data, setData] = useState(
        {
            email: '', 
            password: '', 
            password2: '', 
            nip: '', 
            phone: '', 
            website: '', 
            plan_id: '',
            regulations: false,
            marketing: false
        }
    );

    const [incorrectEmail, setIncorrectEmail] = useState('');
    const [incorrectPassword, setIncorrectPassword] = useState('');
    const [incorrectPassword2, setIncorrectPassword2] = useState('');
    const [incorrectNip, setIncorrectNip] = useState('');
    const [incorrectPhone, setIncorrectPhone] = useState('');
    const [incorrectEqualPasswords, setIncorrectEqualPasswords] = useState('');
    const [incorrectCheckboxRegulations, setIncorrectCheckboxRegulations] = useState('');
    const [incorrectCheckboxMarketing, setIncorrectCheckboxMarketing] = useState('');

    const [incorrectEmailMsg, setIncorrectEmailMsg] = useState('');
    const [incorrectPasswordMsg, setIncorrectPasswordMsg] = useState('');
    const [incorrectPasswordMsg2, setIncorrectPasswordMsg2] = useState('');
    const [incorrectNipMsg, setIncorrectNipMsg] = useState('');
    const [incorrectPhoneMsg, setIncorrectPhoneMsg] = useState('');
    const [incorrectEqualPasswordsMsg, setIncorrectEqualPasswordsMsg] = useState('');
    const [incorrectCheckboxRegulationsMsg, setIncorrectincorrectCheckboxRegulationsMsg] = useState('');
    const [incorrectCheckboxMarketingMsg, setIncorrectincorrectCheckboxMarketingMsg] = useState('');

    const inputEmail = useRef(null);
    const inputPassword = useRef(null);
    const inputPassword2 = useRef(null);
    const inputNip = useRef(null);
    const inputPhone = useRef(null);
 
    const [submit, setSubmit] = useState(false);
    const [send, setSend] = useState(false);
    const [succes, setSucces] = useState(false);
    const [transactionURL, setTransactionURL] = useState('');

    const form = useRef(null);
    const url = {
        account: ' http://127.0.0.1:3001/register'
    };
    const required = <svg data-class="required-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="asterisk" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-asterisk fa-w-16 fa-fw fa-2x"><path fill="currentColor" d="M478.21 334.093L336 256l142.21-78.093c11.795-6.477 15.961-21.384 9.232-33.037l-19.48-33.741c-6.728-11.653-21.72-15.499-33.227-8.523L296 186.718l3.475-162.204C299.763 11.061 288.937 0 275.48 0h-38.96c-13.456 0-24.283 11.061-23.994 24.514L216 186.718 77.265 102.607c-11.506-6.976-26.499-3.13-33.227 8.523l-19.48 33.741c-6.728 11.653-2.562 26.56 9.233 33.037L176 256 33.79 334.093c-11.795 6.477-15.961 21.384-9.232 33.037l19.48 33.741c6.728 11.653 21.721 15.499 33.227 8.523L216 325.282l-3.475 162.204C212.237 500.939 223.064 512 236.52 512h38.961c13.456 0 24.283-11.061 23.995-24.514L296 325.282l138.735 84.111c11.506 6.976 26.499 3.13 33.227-8.523l19.48-33.741c6.728-11.653 2.563-26.559-9.232-33.036z" className=""></path></svg>

    const email = (data) => {    
        
        function validateEmail(email) {
            let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return reg.test(email);
        }

        if(
            data.email && 
            data.email !== '' && 
            data.email !== ' ' && 
            validateEmail(data.email)
        ){
            setIncorrectEmailMsg('');
            setIncorrectEmail('');
            return true;

        } else {
            setIncorrectEmailMsg('Podaj poprawny adres e-mail!');
            setIncorrectEmail('incorrect');
            return false;
        }   
    }

    const password = (data) => {   
        
        function validatePassword(password) {
            const reg = new RegExp("<","g")
            if(!reg.test(password)) {
                return true;
            } else {
                return false;
            }
        }

        if(
            data.password && 
            data.password !== '' && 
            data.password !== ' ' &&
            data.password.length >= 6 &&
            validatePassword(data.password)
        ){
            setIncorrectPasswordMsg('');
            setIncorrectPassword('');
            return true;

        } else {
            setIncorrectPasswordMsg('Podaj poprawne hasło, minimum 6 znaków!');
            setIncorrectPassword('incorrect');
            return false;
        }   
    }

    const password2 = (data) => {            
        if(
            data.password2 && 
            data.password2 !== '' && 
            data.password2 !== ' ' 
        ){
            setIncorrectPasswordMsg2('');
            setIncorrectPassword2('');
            return true;

        } else {
            setIncorrectPasswordMsg2('Powtórz hasło!');
            setIncorrectPassword2('incorrect');
            return false;
        }   
    }

    const nip = (data) => {   
        if(
            data.nip && 
            data.nip !== '' && 
            data.nip !== ' ' &&
            data.nip.length === 10 
        ){
            setIncorrectNipMsg('');
            setIncorrectNip('');
            return true;

        } else {
            setIncorrectNipMsg('Podaj poprawny numer nip, tylko cyfry!');
            setIncorrectNip('incorrect');
            return false;
        }   
    }

    const phone = (data) => {            
        if(
            data.phone && 
            data.phone !== '' && 
            data.phone !== ' ' &&
            data.phone.length >= 7 
        ){
            setIncorrectPhoneMsg('');
            setIncorrectPhone('');
            return true;

        } else {
            setIncorrectPhoneMsg('Podaj poprawny numer telefonu bez spacji, tylko cyfry, może zawierać znak "+" na początku!');
            setIncorrectPhone('incorrect');
            return false;
        }   
    }

    const equalPasswords = (data) => {    
        if(
            (data.password && data.password2) &&     
            (data.password === data.password2)      
        ){
            setIncorrectEqualPasswordsMsg('');
            setIncorrectEqualPasswords('');
            return true;

        } else {
            setIncorrectEqualPasswordsMsg('Podane hasła nie są identyczne!');
            setIncorrectEqualPasswords('incorrect');
            return false;
        }   
    }

    const regulations = () => {            
        if(data.regulations){
            setIncorrectincorrectCheckboxRegulationsMsg('');
            setIncorrectCheckboxRegulations('');
            return true;
        } else {
            setIncorrectincorrectCheckboxRegulationsMsg('Zgoda na regulamin jest wymagana!');
            setIncorrectCheckboxRegulations('checkbox-incorrect');
            return false;
        }  
    }

    const marketing = () => {            
        if(data.marketing){
            setIncorrectincorrectCheckboxMarketingMsg('');
            setIncorrectCheckboxMarketing('');
            return true;
        } else {
            setIncorrectincorrectCheckboxMarketingMsg('Zgoda na marketing jest wymagana!');
            setIncorrectCheckboxMarketing('checkbox-incorrect');
            return false;
        }  
    }

    const validateNumber = (input) => {

        if(input.id === "tel") {
            input.value = input.value.replace(/[^+/0-9]/g, '');
        } else {
            input.value = input.value.replace(/[^0-9]/g, '');
        }
    }

    const handleChange = (e) => {

        e.target.value = e.target.value.replace(/ /g, '');

        if(e.target.id === "nip") {
            validateNumber(e.target);
        }

        if(e.target.id === "tel") {
            validateNumber(e.target);
        }

        if(
            (e.target.name === 'regulations') ||
            (e.target.name === 'marketing') 
        ){
            setData({
                ...data, 
                [e.target.name]: e.target.checked
            });    
        } else {
            setData({
                ...data, 
                [e.target.name]: e.target.value
            });
        }
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);

        email(data);
        password(data);
        password2(data);
        equalPasswords(data);
        // nip(data);
        // phone(data);
        regulations();
        marketing();

        if(
            email(data) && 
            password(data) &&
            password2(data) &&
            equalPasswords(data) &&
            // nip(data) &&
            // phone(data) &&
            regulations() &&
            marketing() 
        ){
            setSend(true);
        } else {
            setSend(false);
        }
    }

    useEffect(() => {            
        if(submit) {
            email({email: inputEmail.current.value});
            password({password: inputPassword.current.value});
            password2({password2: inputPassword2.current.value});
            // nip({nip: inputNip.current.value});
            // phone({phone: inputPhone.current.value});
            equalPasswords({
                password: inputPassword.current.value,
                password2: inputPassword2.current.value
            });
            regulations();
            marketing();
        }
    }, [data]);

    useEffect(() => {

        if(send){     
            delete data.password2;
            console.log(data);
            fetch(url.account, {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => {
                // form.current.reset();
                // setData({email:'', password:'', password2:'', nip:'', phone:'', website:'',  plan_id: ''})
                // setSucces(true);
                console.log(res);

                // fetch(url.transaction, {
                //     method: "post",
                //     headers: {
                //         'Content-Type': 'application/json',
                //         'token': res.token
                //     },
                //     body: JSON.stringify({plan_id: ''})
                // })
                // .then(resTr => resTr.json())
                // .then(resTr => {
                //     // console.log(res);
                //     setTransactionURL(resTr.transaction_url);
                // })

            })

        }
    }, [send]);

    return (

        <>
            {
                succes ? 
                    <section>
                        <div className="container">
                            <div className="alert alert-success" role="alert">
                                Gratulacje, twoje konto zostało utworzone!
                            </div>
                            <div className="order-info-container">
                                <h2>Zaloguj się do swojego konta</h2>
                                <a className="btn btn-primary order-info-btn" href="/panel" role="button">Zaloguj się</a>
                            </div>
                        </div>
                    </section> 
                :
                    <section>
                    <div className="container">
                        <div className="form-container">

                        <h4 className="plans-heading">Utwórz konto</h4>

                        <form ref={form} onSubmit={handleSubmit} className="register-form" noValidate>

                            <div className="form-group required">
                                {required}
                                <label htmlFor="email">Adres e-mail</label> 
                                <input 
                                    type="text" 
                                    className={`form-control ${incorrectEmail}`} 
                                    name="email"
                                    id="email" 
                                    aria-describedby="emailHelp" 
                                    placeholder="Wpisz adres e-mail..."  
                                    onChange={handleChange} 
                                    ref={inputEmail}
                                />
                                <div className="incorrect-msg">{incorrectEmailMsg}</div>
                            </div>

                            <div className="form-group">
                                {required}
                                <label htmlFor="password">Hasło</label>
                                <input 
                                    type="password" 
                                    className={`form-control ${incorrectPassword}`} 
                                    name="password"
                                    id="password" 
                                    placeholder="Wpisz swoje hasło..."  
                                    onChange={handleChange}  
                                    ref={inputPassword}
                                />
                                <div className="incorrect-msg">{incorrectPasswordMsg}</div>
                            </div>

                            <div className="form-group">
                                    {required} 
                                    <label htmlFor="re-password">Powtórz hasło</label>                                 <input 
                                    type="password" 
                                    className={`form-control ${incorrectPassword2} ${incorrectEqualPasswords}`} 
                                    name="password2"
                                    id="password2"
                                    placeholder="Powtórz swoje hasło..." 
                                    onChange={handleChange}  
                                    ref={inputPassword2}                           
                                />
                                <div className="incorrect-msg">{incorrectPasswordMsg2}</div>
                                <div className="incorrect-msg">{incorrectEqualPasswordsMsg}</div>
                            </div>

                            {/* <div className="form-group">
                                {required}
                                <label htmlFor="nip">Numer NIP</label>
                                <input 
                                    type="text"
                                    className={`form-control ${incorrectNip}`}
                                    name="nip" 
                                    id="nip" 
                                    placeholder="Wpisz swój numer NIP..."  
                                    onChange={handleChange}  
                                    ref={inputNip} 
                                />
                                <div className="incorrect-msg">{incorrectNipMsg}</div>
                            </div> */}

                            {/* <div className="form-group">
                                {required}
                                <label htmlFor="tel">Numer telefonu</label>
                                <input 
                                    type="text" 
                                    className={`form-control ${incorrectPhone}`}
                                    name="phone"
                                    id="tel" 
                                    placeholder="Wpisz swój numer telefonu..."  
                                    onChange={handleChange}  
                                    ref={inputPhone}
                                />
                                <div className="incorrect-msg">{incorrectPhoneMsg}</div>
                            </div> */}

                            <div className="form-group">
                                <label htmlFor="www">Adres twojej strony internetowej </label>
                                <input 
                                    type="text" 
                                    className="www-control" 
                                    id="www" 
                                    placeholder="Wpisz adres swojej strony www..." 
                                    onChange={handleChange}  
                                />
                                <small id="emailHelp" className="form-text text-muted">To pole nie jest wymagane.</small>
                            </div>

                            <div className="form-group">
                                <div className="checkbox-required">{required}</div>
                                <label className="checkbox-container">
                                <p>Wyrażam zgodę na przetwarzanie podanych przeze mnie danych osobowych przez chatmybot.com, w zakresie i do celów świadczenia usług określonych przez <a target="_blank" href="/downloads/716,file,warunki-wspolpracy.pdf">Warunki Współpracy</a> i <a target="_blank" href="/downloads/715,file,regulamin-zakupow.pdf">Regulamin zakupów</a> w oparciu o postanowienia zawarte w dokumencie <a target="_blank" href="/downloads/717,file,polityka-prywatnosci.pdf">Polityka Prywatności</a>.</p>
                                    <input 
                                            className="checkbox-input" 
                                            className="checkbox-input" 
                                            type="checkbox"
                                            name="regulations"
                                            onChange={handleChange}
                                    />
                                    <div className="incorrect-msg">{incorrectCheckboxRegulationsMsg}</div>
                                    <span className={`checkbox-checkmark ${incorrectCheckboxRegulations}`}></span>
                                </label>
                            </div>
                            
                            <div className="form-group form-group-end">
                                <div className="checkbox-required">{required}</div>
                                <label className="checkbox-container">
                                <p>Przeczytałem i zgadzam się na <a target="_blank" href="/downloads/716,file,warunki-wspolpracy.pdf">Warunki Współpracy</a>, <a target="_blank" href="/downloads/715,file,regulamin-zakupow.pdf">Regulamin zakupów</a> </p>
                                    <input 
                                            className="checkbox-input" 
                                            type="checkbox"
                                            name="marketing"
                                            onChange={handleChange}
                                    />
                                    <div className="incorrect-msg">{incorrectCheckboxMarketingMsg}</div>
                                    <span className={`checkbox-checkmark ${incorrectCheckboxMarketing}`}></span>                                </label>
                            </div>
                            
                            <div className="form-group btn-container">
                                <button 
                                        type="submit" 
                                        className="btn btn-primary btn-order">
                                        Zarejestruj się
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
                </section>
            }
        </>
    );
}

export default Register;