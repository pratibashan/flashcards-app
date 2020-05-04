import React from 'react'
import Flashcard from './Flashcard'
import '../App.css'


export default function FlashcardList(props) {

  return (
    <div className="card-grid">
      {props.flashcards.map((flashcard, index) => {
        return <Flashcard flashcard={flashcard} key={index} />
      })}
    </div>

  )
}