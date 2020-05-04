import React from 'react';
import './App.css';
import FlashcardList from './components/FlashcardList'


function App() {


  const flashcards = [
    {
      'id': '1',
      'front_content': 'Front of card 1',
      'back_content': 'Back of card 1',
      'content_type': 'text'

    },
    {
      ' id': '2',
      'front_content': 'Front of card 2',
      'back_content': require("./assets/images/coffee-image.jpeg"),
      'content_type': 'img'
    },
    {
      'id': 3,
      'front_content': 'Front of card 3',

      'back_content': 'When you want to buy any application from the Apple iTunes store you have more choices than you can                   handle. Most of the users scroll past the application description completely avoiding it like ads                     displayed on the right column of your webpage. Their choice is dependent on three important factors                   price, screenshot and reviews.When you want to buy any application from the Apple iTunes store you                    have more choices than you can handle. Most of the users scroll past the application description                      completely avoiding it like ads displayed on the right column of your webpage. Their choice is                        dependent on three important factors price, screenshot and reviews.',

      'content_type': 'paragraph'

    }
  ]
  return (
    <FlashcardList flashcards={flashcards} />
  );
}

export default App;
