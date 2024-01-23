import React from 'react'
import Card from '../Card/Card'
import './FeatureProduct.scss'
function FeatureProduct({type}) {
  const items =[
    {
      id:1,
      oldPrice:2000,
      price:1200,
      name:"suit",
      image:"https://images.pexels.com/photos/7691089/pexels-photo-7691089.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:2,
      oldPrice:2000,
      price:1200,
      name:"suit",
      image:"https://images.pexels.com/photos/3984880/pexels-photo-3984880.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:3,
      oldPrice:2000,
      price:1200,
      name:"suit",
      image:"https://images.pexels.com/photos/9594147/pexels-photo-9594147.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:4,
      oldPrice:2000,
      price:1200,
      name:"suit",
      image:"https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
  ]

  return (
    <div className="featureProducts">
        <div className="top">
           <h2>{type} products</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laborum dolore doloribus error dolorum fuga beatae nostrum incidunt ab harum aliquam eveniet minima, qui dignissimos assumenda numquam, earum asperiores non?</p>
        </div>
        <div className="bottom">
             {
              items.map((item)=>{
                <Card item={item} key={item.id}/>
              })
             }
        </div>
    </div>
  )
}

export default FeatureProduct