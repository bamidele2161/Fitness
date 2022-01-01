import React from 'react'

const Menu = ({menuItem}) => {
    return (
        <div className="item">
            {
                menuItem.map((item) => {
                    return <div className="item-con" key={item.id}>
                        <div className="item-container">
                            <img src={item.image} alt='' />
                            <h2>{item.name}</h2>
                            <p>{item.type}</p>
                        </div>
                    </div>
                }) 
            }
        </div>
    )
}

export default Menu
