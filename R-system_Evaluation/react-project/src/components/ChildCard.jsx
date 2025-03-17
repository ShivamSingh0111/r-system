import React from 'react'

const ChildCard = ({data}) => {
  return (
    <div>
        <ul>
        {data.map(el=>(
               <li >
                <h1>{el.title}</h1>
                <p>{el.body}</p>
                <p>{el.userId}</p>
               </li>
        ))}


        </ul>
    
    </div>
  )
}

export default ChildCard
