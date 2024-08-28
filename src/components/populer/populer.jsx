import React from 'react';
import './populer.css';
import data_product from '../assets/data';
import Item from '../items/item';

const Populer = () => {
    return (
        <div className='populer'>
            <h1>POPULAR IN WOMENS</h1>
            <hr/>
            <div className="populer-item">
                {data_product.map((item, i) => {
                    return (
                        <Item 
                            key={i} 
                            id={item.id} 
                            name={item.name} 
                            img={item.image}  // Updated this line
                            new_price={item.new_price} 
                            old_price={item.old_price} 
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Populer;
