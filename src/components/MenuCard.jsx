import React, { useEffect, useState } from 'react'

const MenuCard = () => {
    const [menuItem, setMenuItem] = useState([]);

    useEffect(() => {
        fetch('https://gastropub.webmcdm.dk/menus')
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setMenuItem(response)
            })
    }, [])

    return (
      <main className='menu-container container'>
        {
            menuItem.map((item, index) => (
                
                    <div key={index} className='menu-container-wrapper'>
                        
                        <img src={item.image} alt="Courses" className="menu-img" />

                        <div className='menu-content'>
                            <h2 className='menu-content-title'>{item.name}</h2>

                            {
                                item.dishes.map((dish, index) => {
                                    return (
                                            <div key={index} className='menu-content-item'>
                                                <div className="dish-container" key={index}>
                                                    <p className='dish-name'>{dish.name}</p>
                                                    <p className='dish-ingredients'>{dish.ingredients}</p>
                                                </div>
                                                
                                                <p className='dish-price'>{dish.price}</p>
                                               
                                            </div>
                                        )
                                })
                            }
                        
                        </div>
                    </div>

                
            ))
        }
      </main>
  )
}

export default MenuCard