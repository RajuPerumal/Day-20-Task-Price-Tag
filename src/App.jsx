import React from 'react';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import PriceCard from "./PriceCard.jsx";
// import {cardData} from './assets/data.json'

const App = () => {
  
  const cardData =[
    {
      "type": "FREE",
      "price": "$0/Month",
      "features": [
        {
          "name": "Single User",
          "avaiable": true
        },
        {
          "name": "50 GB Storage",
          "avaiable": true
        },
        {
          "name": "Unlimited Public Projects",
          "avaiable": false
        },
        {"name":"Community Access","avaiable": true},
        {"name":"Email Support","avaiable": false},
        {"name":"Dedicated Phone Support","avaiable": false},
        {"name":"Business Support","avaiable": false},
        {"name":"Priority Ticketing","avaiable": false},
        {"name":"Enterprise Support","avaiable": false},
      ]
    },
    {
      "type": "PLUS",
      "price": "$9/Month",
      "features": [
        {
          "name": "Unlimited User",
          "avaiable": true
        },
        {
          "name": "50 GB Storage",
          "avaiable": true
        },
        {
          "name": "Unlimited Public Projects",
          "avaiable": true
        },
        {"name":"Community Access","avaiable": true},
        {"name":"Email Support","avaiable": true},
        {"name":"Dedicated Phone Support","avaiable": true},
        {"name":"Business Support","avaiable": true},
        {"name":"Priority Ticketing","avaiable": false},
        {"name":"Enterprise Support","avaiable": false},
      ]
    },
    {
      "type": "PRO",
      "price": "$49/Month",
      "features": [
        {
          "name": "Unlimited User",
          "avaiable": true
        },
        {
          "name": "50 GB Storage",
          "avaiable": true
        },
        {
          "name": "Unlimited Public Projects",
          "avaiable": true
        },
        {"name":"Community Access","avaiable": true},
        {"name":"Email Support","avaiable": true},
        {"name":"Dedicated Phone Support","avaiable": true},
        {"name":"Business Support","avaiable": true},
        {"name":"Priority Ticketing","avaiable": true},
        {"name":"Enterprise Support","avaiable": true},
      ]
    }
  ]

  return (
    <>
    {cardData.map(cdata =>(<PriceCard type = {cdata.type} price={cdata.price} features={cdata.features}/>))}
   </>
  )
}

export default App;
