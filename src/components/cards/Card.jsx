import React from 'react'
import CardStyles from "../Sass/Card.module.scss"

const Card = ({data}) => {
    
  return (
    <div className={CardStyles.container}>
        {data.map(item=> {
       const{id, image, desc, title} = item;
       return (  
            <div key={id} className={CardStyles.card}>
                <h2 className={CardStyles.titles}>{title.toLocaleUpperCase("en")}</h2>
                <img className={CardStyles.images} src={image} alt="photos" />
                <div className={CardStyles.description}>
                <p>{desc}</p>

                </div>
            </div>
        ) 
 

    })}
    </div>

 

  )
}

export default Card;