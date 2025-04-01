 import "./Products.css"
 import { appContext } from "../App";
 import { useContext } from "react";
 export default function Products(){
    
        const {user,products} = useContext(appContext)
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
                   <button>Add to cart11</button>
                   </div>
                    )) 
                }
            </div>
        </div>
    )
}
