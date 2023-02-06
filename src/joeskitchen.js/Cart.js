import React from 'react'

function Cart({ CartDetails,setCartDetails}) {

  let increment=(item)=>{
      const increase=CartDetails.map(e=>
        {return e.ID===item.ID   ? {...e,  QTY:e.QTY+=1 , UniqueTotalAMT:e.QTY*e.AMT } : e}); 
        setCartDetails(increase);
  }
      
  
  let decrement=(item)=>{
    const decrease = CartDetails.map(e=>{
      return e.ID===item.ID && e.QTY>1 ? {...e, QTY:e.QTY-=1 ,UniqueTotalAMT:Number(e.UniqueTotalAMT)-Number(e.AMT) } : e;
    })
    setCartDetails(decrease);
  }
   
  return (
    <div className='cart-overlay'>
    <div className="cart">
        {CartDetails.filter((CartDetails)=> CartDetails ? CartDetails : null ).map((e)=>{
          return<div key={e.ID} className="cart-item">
         <img src={`https://www.app.tutorjoes.in/img/food/${e.PIC}`} alt="{e.NAME}"  />
            <div>
              <h4>{e.NAME }</h4>
              <h5>Rs {e.AMT}</h5>
              <h5>Total : {e.UniqueTotalAMT }</h5>
              <span className="remove-item">Remove</span>
            </div>
            <div>
              <i className="fa fa-plus" onClick={()=>increment(e)}></i>
              <p className="item-amount">
                {e.QTY}
               
              </p>
              <i className="fa fa-minus" onClick={()=>decrement(e)}></i>
            </div>
          </div>
        }) }
    </div>
    </div>
  )
}

export default Cart