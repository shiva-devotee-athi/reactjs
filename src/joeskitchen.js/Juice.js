import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

export default function Latest() {
    const [Juice,setJuice]=useState([])
      
    useEffect(()=>{
        response()
        },[]
    )
    const response = async ()=>
       { 
        const res = await axios.get("https://www.app.tutorjoes.in/mobile/getAllFood")
        setJuice(res.data.items)
    }
    return (
    <div className="products">
        <h3 id="txtFoodType">Loading...</h3>
        <div className="products-container">
            {Juice.filter(Juice=>Juice.FTYPE==="Juice").map((e)=>{
                return<div key={e.ID} className="product">
                    <div className="img-container">
                      <img src={`https://www.app.tutorjoes.in/img/food/${e.PIC}`} alt="{e.NAME}" className="product-img" />
                    </div>
                    <h3>{e.NAME}</h3>
                    <h4>{e.SHOP}</h4>
                    <h5><span>{e.FTYPE}</span> Rs.{e.AMT}</h5>
                    <button className="btn-item" data-id="{product.ID}">
                      <i className="fa fa-shopping-cart"></i>
                      add to cart
                    </button>
                    <button className="btn-fav fa fa-heart {active}"  data-id="{product.ID}"></button>
                </div> })}
        </div>
    </div>
  )
}
