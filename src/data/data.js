import './data.css'
export const products = [
   {
    id: 1,
    name: "MacBook",
    price: 85000,
    image:
      "https://avatars.mds.yandex.net/get-mpic/4509881/img_id4337426857549178299.jpeg/orig",
  },
  {
    id: 2,
    name: "Galaxy",
    price: 80000,
    image:
      "https://store123.ru/upload/iblock/626/ax04ncwtivcemt8223b0q0m5bo2ftwqh.png",
  },
  {
    id: 3,
    name: "Скутер",
    price: 110000,
    image:
      "https://etekbikes.com/wp-content/uploads/2020/12/scout_Grey_NO_ACCESORY_1-2.jpg",
  },
  {
    id: 4,
    name: "Монитор Samsung",
    price: 21000,
    image:
      "https://images.samsung.com/is/image/samsung/tr-sr35-ls27r350fhmxuf-frontblack-229553216?$650_519_PNG$",
  },
  {
    id: 5,
    name: "Респераторная маска",
    price: 1100,
    image:
      "https://cdn11.bigcommerce.com/s-tdvizl1wrj/images/stencil/original/products/808/7737/SOTR_combined_02__53450.1650406905.jpg?c=2",
  },
  {
    id: 6,
    name: "Стиральная машина",
    price: 65999,
    image:
      "https://www.lg.com/in/images/washing-machines/md07540744/gallery/FHM1207BDL-Washing-Machines-Front-View-D-01.jpg",
  },
  {
    id: 7,
    name: "Белый холодильник",
    price: 55600,
    image:
      "https://d15v10x8t3bz3x.cloudfront.net/Immagini/2020/5/15907698/640-1_34004287_15_01_f_ccrn%206180%20w-M.jpg",
  },
  {
    id: 8,
    name: "Колонка",
    price: 7100,
    image:
      "https://m.onlinetrade.ru/img/items/m/kolonka_jbl_charge_5_black_1739076_1.jpg",
  },
  {
    id: 9,
    name: "Наушники",
    price: 5400,
    image:
      "https://resource.logitechg.com/w_692,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g733/gallery/g733-lilac-gallery-1.png?v=1",
  },
];
function Data({products, item, addToBasket, deleteFromBasket}) {
  
  
  return (
    <>
      {products.map((i) => {
        return (
          <div className="sub-block">
            <div className="image">
              <img src={i.image} alt="" />
            </div>
            <div className="name">
              <p>{i.name}</p>
            </div>
            <div className="price">
              <p>{i.price} рублей</p>
            </div>
            {
              item.includes(i)
              ? <div className="but" id={i.id} onClick={() => deleteFromBasket(i)}>Удалить из корзины</div>
              : <div className="but" id={i.id} onClick={() => addToBasket(i)}>Добавить в корзину</div>
                         
            }
          </div>
        );
      })}
    </>
  );
}

export default Data;