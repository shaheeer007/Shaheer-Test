import React from 'react'
import Data from '../data.json'
import '../App.css'

export default function MostUpvoted() {
  return (
    <div>
      <h2 className="display-header">Displaying in descending number of upvotes</h2>
       {
      
      Data.map(data => {
    

        return (
        <div key={data.upvotes} className="voted-div">
            <div className="voted-content">
            <h3>Title: {data.title} </h3>
            <h5>Upvotes: {data.upvotes} </h5>
            <h6>Date: {data.date}</h6>
            </div>
        </div>
        )
      }).sort((a, b) => (a.key < b.key) ? 1 : -1)
      
      }

    </div>
  )
}
