import './bascket.css'
export function Bascket({item, deleteFromBasket}){
   return(
   <div className='basket-block'>
   {
    item.map((i) =>{
        return(
            <div className="sub-block">
                <img className="image"  src={i.image} alt={i.name} />
                <div className="name"><p>{i.name}</p></div>
                <div className="price"><p>{i.price}</p></div>
                <button className="but" id={i.id} onClick={() =>{deleteFromBasket(i)}}>Удалить из корзины</button>
            </div>
        )
    })
   }
   </div>
   )
}