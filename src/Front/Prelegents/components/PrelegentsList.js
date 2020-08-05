import avatar from '../img/avatar.png';
import '../style/Prelegents.scss';
import Modal from './Modal';
import React, { useState } from 'react'

const json = [
    { 
        id: "1",
        name: "Jan Nowak", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
        img: "../img/avatar.png"
    },
    { 
        id: "2",
        name: "Jan Nowak", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
        img: "../img/avatar.png"
    },
    { 
        id: "3",
        name: "Jan Nowak", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
        img: "../img/avatar.png"
    },
    { 
        id: "4",
        name: "Jan Nowak", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
        img: "../img/avatar.png"
    },
    { 
        id: "5",
        name: "Jan Nowak", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
        img: "../img/avatar.png"
    },
    { 
        id: "6",
        name: "Jan Nowak", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
        img: "../img/avatar.png"
    },
] 

const PrelegentsList = () => {
    
    const [dataModalName, setDataModalName] = useState(null);
    const [dataModalDescription, setDataModalDescription] = useState(null);

    const getData = (e) => {

        let htmlElements = e.target.parentElement.children;

        for(let i = 0; i < htmlElements.length; i++) {

            if(htmlElements[i].id === "name") {
                setDataModalName(htmlElements[i].innerText)
            }

            if(htmlElements[i].id === "description") {
                setDataModalDescription(htmlElements[i].innerText);
            }
        }
    } 

    const checkLengthText = (txt) => {
        if(txt.length > 100) {
            let t = (txt.slice(0, 100) + " ...");
            return t;
        } else {
            return txt;
        }
    }

    const list = json.map( (item, index) => {
        return (
            <div key={index} className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={avatar} alt="Card image cap"/>
                <div className="card-body">
                    <div id="name" className="card-title">{item.name}</div>
                    <div className="card-social-icons">
                        <a href="#" className="fa fa-facebook">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </div>
                    <p className="card-text">{checkLengthText(item.description)}</p>
                    <div id="description" style={{display: "none"}}>{item.description}</div>
                    <button onClick={getData} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                        Czytaj więcej
                    </button>
                </div>
            </div>
        );
    });

    return (
        <section className="container prelegents-content">
            {list}
            <Modal name={dataModalName} description={dataModalDescription}/>
        </section>
    );
}

export default PrelegentsList;