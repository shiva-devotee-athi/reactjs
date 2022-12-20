import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Latest() {
    const [Latest,setLatest]=useState([])
      
    useEffect(()=>{
        response()
        },[]
    )
    const response = async ()=>
       { 
        const res = await axios.get("https://www.app.tutorjoes.in/mobile/getAllFood")
        setLatest(res.data.items)
    }
    return (
        <div className="products">
        <h3 id="txtFoodType">Loading...</h3>
        <div className="products-container">
            {Latest.filter(Latest=>Latest.LATEST==="Yes").map((e)=>{
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
                </div>
            })}
            </div>
            <Link to="/Latest">
                
            </Link>

        </div>
  )
}
