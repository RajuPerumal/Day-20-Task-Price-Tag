import React from 'react';
import "./PriceCard.css";
import Button from 'react-bootstrap/Button';
const PriceCard = (props) => {
  return (
   //<div className="container">
   // <div className="row">

    <div className="PriceCard">
    
     <div className="card-header">
        <h6 style={{color: "grey"}}>{props.type}</h6>
        <h4>{props.price}</h4>
      </div>
      
      <div className="card-body">
      
      <ul className='ListItems'>{props.features.map((feature, index) => (
            <li
              key={index}
              className={`list-group-item ${feature.avaiable ? '' : 'text-muted'}`}
            >
              {feature.avaiable ? '✔️' : '❌'} {feature.name}
            </li>
          ))}
        <Button variant="primary">Select</Button>
        </ul>
        
      </div>
     
      </div>

     // </div>
    //</div>
  );
};

export default PriceCard;