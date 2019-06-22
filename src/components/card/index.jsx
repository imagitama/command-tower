import React from 'react'
import { Grid } from '@material-ui/core'

const Card = ({ scryfallCardId, cardName, cardImageUrl, rating, reasons }) => (
  <Grid container data-scryfallCardId={scryfallCardId}>
    <Grid item>
      <Grid
        container
        alignContent="center"
        alignItems="center"
        style={{ height: '100%' }}>
        <Grid item style={{ fontSize: '200%', textAlign: 'center' }}>
          <div style={{ width: '6rem' }}>{rating}</div>
        </Grid>
      </Grid>
    </Grid>
    <Grid item>
      <img src={cardImageUrl} width="150" />
    </Grid>
    <Grid item>
      <div style={{ paddingLeft: '2rem' }}>
        <div style={{ fontSize: '150%', marginBottom: '1rem' }}>{cardName}</div>
        {reasons}
      </div>
    </Grid>
  </Grid>
)

export default Card
