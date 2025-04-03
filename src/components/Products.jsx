 import "./Products.css"
 import { appContext } from "../App";
 import { useContext } from "react";
 export default function Products(){
    
        const {user,products,cart,setCart} = useContext(appContext)

        const addToCart = (value)=>{
            setCart({...cart,[value]:1});
            console.log(cart)
        }
    return(
        <div>
            <h2>Products List</h2>
           <p> Welcome back {user.name}!</p> 
            <div className="App-Products-row">
                {
                   products.map((value,index)=>(
                   <div className="App-Products-Box" key={index}>
                   <h3>{(value.name)}</h3> 
                   <h4>{(value.price)}</h4>
                   <button onClick={()=>addToCart(value.id)}>Add to cart1</button>
                   </div>
                    )) 
                }
            </div>
        </div>
    )
}
