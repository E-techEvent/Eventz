import React from 'react'
import { useParams } from 'react-router'

const SingleEvent = () => {
  return (
    <div>
        SINGLE EVENT {useParams().id}
    </div>
  )
}

export default SingleEvent
