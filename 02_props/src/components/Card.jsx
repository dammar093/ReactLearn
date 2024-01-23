import React from 'react'

const Card = ({name,age,image}) => {
  return (
    <div>
        <div className="image">
          <img src={image} alt="photo"  style={{width:200,height:200,objectFit:"cover"}}/>
        </div>
        <h3>Name: {name}</h3>
        <h5>Age: {age}</h5>
    </div>
  )
}

export default Card