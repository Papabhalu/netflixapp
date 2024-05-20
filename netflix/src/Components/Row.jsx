import React from 'react'
const imgUrl = "https://image.tmdb.org/t/p/original"

const Card = ({img})=>(
    <img className='card' src={img} alt="cover" />
  )
  
const Row = ({title,arr=[
  // {img:"https://i.etsystatic.com/13367669/r/il/8adffe/1506815473/il_570xN.1506815473_lb94.jpg"}
] })=>(
    <div className='row'>
      <h2>{title}</h2>
      <div>
        {
          arr.map((item,index) => (
            <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
          ))
        }
      </div>
  
    </div>
  )
  

export default Row