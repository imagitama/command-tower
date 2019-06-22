import React from 'react'
import Card from '../card'

const Cards = ({ cards }) => (
  <ul>
    {cards.map(card => (
      <Card key={card.scryfallCardId} {...card} />
    ))}
  </ul>
)

export default Cards
