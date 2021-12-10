import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setCategories( [ 'HunterXHunter', ...categories] );
    //     setCategories( categories => [ ...categories, 'HunterXHunter' ] ); /* Esta forma tambien es valida dado que la función para modificar estado esta compuesta de un callback */
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                { 
                    categories.map( (category, idx) => (
                        /* <li key={ `idx_cat_${idx}` }>{ category }</li> */
                        <GifGrid 
                            key={ `idx_cat_${idx}` }
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>
    )
}
