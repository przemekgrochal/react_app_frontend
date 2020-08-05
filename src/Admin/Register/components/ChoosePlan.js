import React from 'react';

const ChoosePlan = ({plans}) => {


    const handleClick = (e) => { 
        (e.target.localName === "li") ?  
        
            window.location.href = window.location.href + '/' +  e.target.parentElement.parentElement.id 
        :
            window.location.href = window.location.href + '/' +  e.target.parentElement.id;
    }

    let bill = null;

    if(plans !== null) {

        bill = plans.map( (item, index) => {

            const contentBill = item.content.map( (item, index) => {
                return <li key={index}> {item} </li>;
            });
    
            return (
                <div 
                    key={item.id} 
                    id={item.id} 
                    className='pricing-table' 
                    data-ref="blocks"
                    onClick={handleClick}
                >
                    <h2 className="pricing-table__header"> {item.name} </h2>
                    <h3 className="pricing-table__price">{item.amount}</h3>
                    <a target="_blank" className="pricing-table__button" href={null}>
                        Kup Teraz!
                    </a>
                    <ul className="pricing-table__list">
                        {contentBill}
                    </ul>
                </div>
            );
        });
    }
    

    return (
        <section>

            <h1>RESPONSIVE PRICING TABLE DESIGN <br/> BY <a target="blank" href="http://www.digimadmedia.com">DIGIMAD MEDIA</a></h1>
            
            <div className="price-table-wrapper">
                {bill}
            </div>
            
        </section>
    );
}

export default ChoosePlan;