import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeSearchTerm } from '../../ducks/app/actions'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, InputBase } from '@material-ui/core'

const SearchBar = ({ searchTerm, changeSearchTerm }) => {
  const useStyles = makeStyles({
    root: {
      padding: '2px 2px 2px 24px',
      borderRadius: '3rem',
      margin: '0 auto 3rem auto',
      display: 'flex',
      alignItems: 'center',
      maxWidth: 600
    },
    input: {
      padding: 10,
      marginLeft: 8,
      flex: 1
    }
  })

  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search cards"
        autoFocus={true}
        autoComplete="false"
        onChange={event => changeSearchTerm(event.target.value)}
        defaultValue={searchTerm}
      />
    </Paper>
  )
}

const mapStateToProps = ({ app: { searchTerm } }) => ({ searchTerm })

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeSearchTerm }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)
