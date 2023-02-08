import React from 'react'

function Cart({ CartDetails,setCartDetails,setCartOpen}) {


  let increment=(item)=>{
      const increase=CartDetails.map(e=>
        {return e.ID===item.ID   ? {...e,  QTY:e.QTY+=1 , UniqueTotalAMT:e.QTY*e.AMT } : e}); 
        setCartDetails(increase);
  }
  
  let decrement=(item)=>{
    const decrease = CartDetails.map(e=>{
      return e.ID===item.ID && e.QTY>=1 ? {...e, QTY:e.QTY-=1 ,UniqueTotalAMT:Number(e.UniqueTotalAMT)-Number(e.AMT) } :  e
    })
    setCartDetails(decrease);
  }

  let removeItem=(e)=>{
    const remove=CartDetails.filter((item)=>item.ID!==e.ID )
      setCartDetails(remove)
    }
   
  return (
    <div className='cart-overlay'>
    <div className="cart">
        <i className='fa fa-close' onClick={()=>setCartOpen(false)}></i>
        { CartDetails.filter((CartDetails)=> CartDetails ? CartDetails : null ).map((e)=>{

          return<div key={e.ID} className="cart-item">
         <img src={`https://www.app.tutorjoes.in/img/food/${e.PIC}`} alt={e.NAME}  />
            <div>
              <h4>{e.NAME }</h4>
              <h5>Rs {e.AMT}</h5>
              <h5>Total : {e.UniqueTotalAMT }</h5>
              <span className="remove-item" onClick={()=>removeItem(e)}>Remove</span>
            </div>
            <div>
              <i className="fa fa-plus" onClick={()=>increment(e) }></i>
              <p className="item-amount">
                {e.QTY}
               
              </p>
              <i className="fa fa-minus" onClick={()=>decrement(e)}></i>
            </div>
          </div> 
        }) } 
            <div className="cart-footer">
              <h3>Total Amount Rs: <span className="cart-total">{CartDetails.reduce((total,cart)=>total+Number(cart.UniqueTotalAMT),0)}</span></h3>
              <button className="btn btn-clear-cart"onClick={()=>setCartDetails([])} >clear cart</button>
            </div>
    </div>
    </div>
  )
      }
export default Cart;