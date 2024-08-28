import React from 'react';
import './NewCollections.css';  // Ensure the path and name are correct
import new_collection from '../assets/new_collections';  // Ensure the path and file are correct
import Item from '../items/item';  // Ensure the path and casing are correct

const NewCollections = () => {
    return (
        <div className='new-collections'>
            <h1>NEW COLLECTION</h1>
            <hr />
            <div className="collection">
                {new_collection.map((item, i) => {
                    return (  // Added return statement here
                        <Item 
                            key={i} 
                            id={item.id} 
                            name={item.name} 
                            img={item.image}  
                            new_price={item.new_price} 
                            old_price={item.old_price} 
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default NewCollections;
