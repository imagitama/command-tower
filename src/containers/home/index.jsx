import React from 'react'
import { connect } from 'react-redux'
import Searchbar from '../../components/searchbar'
import Cards from '../../components/cards'
import useDatabase from '../../hooks/useDatabase'

const HomeContainer = ({ searchTerm }) => {
  const [isLoading, isErrored, records] = useDatabase(
    'ratings',
    null,
    searchTerm
  )

  console.log('results', records)

  return (
    <div>
      <Searchbar />
      {isLoading && <span>Loading...</span>}
      {isErrored && <span>Error!</span>}
      {records.length ? <Cards cards={records} /> : <span>No results</span>}
    </div>
  )
}

const mapStateToProps = ({ app: { searchTerm } }) => ({ searchTerm })

export default connect(mapStateToProps)(HomeContainer)
