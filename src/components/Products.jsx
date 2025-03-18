 import "./Products.css"
 export default function Products(){
    const products=[
        {id:1,name:"product 1",price:30},
        {id:2,name:"product 2",price:40},
        {id:3,name:"product 3",price:50},
        {id:4,name:"product 4",price:60},
        {id:5,name:"product 5",price:70},
        {id:6,name:"product 6",price:80},
    ];
    return(
        <div>
            <h2>Products List</h2>
            <div className="App-Products-row">
                {
                   products.map((value,index)=>(
                   <div className="App-Products-Box" key={index}>
                   <h3>{(value.name)}</h3> 
                   <h4>{(value.price)}</h4>
                   <button>Add to cart</button>
                   </div>
                    )) 
                }
            </div>
        </div>
    )
}
