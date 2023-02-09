import axios from "axios";
import React from "react";
import { useState } from "react";

// import {addToFavourites} from '../reducers'

// const store = createStore(favourites)

export default function KanyeQuoteView(props) {
  const {addToFavs} = props;
  const [quote, setQuote] = useState('')
  const getQuote=()=>{
    axios.get('https://api.kanye.rest')
    .then(res =>{
      console.log(res.data.quote)
      setQuote(res.data.quote)
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <section style={{ textAlign: "center" }}>
      <img
        src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
        alt="W3Schools.com"
        style={{ width: "300px" }}
      />
      <h1 style={{ fontSize: "40px", marginTop: "10px" }}>Kanye-West Quote</h1>
      {quote && <h3>{quote}</h3>}
      <button onClick={getQuote}>Get Quote</button>
      <button 
      onClick={() => addToFavs({favourites: this.quote})}>Add Favorite</button>
    </section>
  );
}
