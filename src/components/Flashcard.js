import React, { useState } from 'react'
import '../App.css'
import Fliparrow from './Fliparrow'


export default function Flashcard(props) {

  const [isFlipped, setIsFlipped] = useState(false)


  let backCard = ''

  if (props.flashcard.content_type === 'text') {

    backCard = <p className="txt-content">  {props.flashcard.back_content} </p>
  }

  if (props.flashcard.content_type === 'paragraph') {

    backCard = <textarea className="txt-area-content" defaultValue={props.flashcard.back_content} />
  }

  if (props.flashcard.content_type === 'img') {


    backCard = <img className="coffee-image" src={props.flashcard.back_content} width="200" height="200" alt='' />

  }

  return (

    <div className={`card ${isFlipped ? 'flip' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}>

      <div className="card-front">
        {props.flashcard.front_content}
      </div>
      <div className="flip-arrow-front">
        <Fliparrow />
      </div>

      <div className="card-back" >
        {backCard}
      </div>

      <div className="flip-arrow-back">
        <Fliparrow />
      </div>

    </div >
  )
}




