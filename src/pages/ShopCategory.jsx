
import React, { useContext } from 'react';
import './CSS/ShopCategory.css'
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../components/assets/dropdown_icon.png'
import Item from '../components/items/item';

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);
    return (
    <div className='shop-category'>
        <img className='shopcategory-banner' src={props.banner} alt="" />
        <div className="shopcategory-indexSort">
            <p>
                <span>
                   Showing 1-12 
                </span>out of 36 products
            </p>
            <div className="shopcategory-sort">
                sort by <img src={dropdown_icon} alt="" />
            </div>
        </div>
        <div className="shopcategory-products">
            {all_product.map((item,i)=>{
                if(props.category===item.category){
                return  <Item 
                key={i} 
                id={item.id} 
                name={item.name} 
                img={item.image}  
                new_price={item.new_price} 
                old_price={item.old_price} 
            />
                }else{
                    return null;
                }
            })}
        </div>
        <div className="shopcategory-loadmore">
            Explore More
        </div>

    </div>
    )
}

export default ShopCategory