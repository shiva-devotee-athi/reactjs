import Slider from './joeskitchen.js/Slider'
import Navbar from './joeskitchen.js/Navbar'
import MenuItem from './joeskitchen.js/MenuItem'
import Products from './joeskitchen.js/Products'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Cart from './joeskitchen.js/Cart'

export default function App() {
  const [products,setProducts]=useState([])
  const [isPending,setIsPending]=useState(true)
  const [CartOpen,setCartOpen]=useState(false);
  const [CartDetails,setCartDetails]=useState([]);


  useEffect(()=>{
    response()
    },[])

const response = ()=>
   { 
   setTimeout(()=>{
     axios("https://www.app.tutorjoes.in/mobile/getAllFood")
      .then(res=>{
          setProducts(res.data.items);
          setIsPending(false);
         })
  },1000);}

  const CheckIsCart=(Item)=>{
    const IsCart=CartDetails.find((e)=> e.ID === Item.ID)
    return IsCart;
  }
  const AddtoCart=(Item)=>
        {
          const newCart=CheckIsCart(Item)
          if(!newCart){
          setCartDetails((prev)=>([...prev,{...Item , QTY:1 , UniqueTotalAMT : Item.AMT}]));
          }
          else{
            alert("already in a CART da venna")
          }
          
        }

        const handleFavourite =(ID)=> {
          const newFavourites = products.map(e => {
            return e.ID === ID ? { ...e, fav: !e.fav} : e;
          });
            setProducts(newFavourites)
          }
return (
    <div>
        <Navbar setCartOpen={setCartOpen}/>
        <Slider/>
        <MenuItem />
        <Routes>
          <Route path="/" element={<></>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/products/:id" element={<Products products={products} isPending={isPending} CheckIsCart={CheckIsCart} handleFavourite={handleFavourite} AddtoCart={AddtoCart}/>}/>
        </Routes>
        {CartOpen &&  <Cart CartDetails={CartDetails} setCartDetails={setCartDetails} />}
        
          
</div>
  )
}
