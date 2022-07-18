import React from 'react'

function Search({ search, setInput, input }) {
  const watchValue = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className='search'>
      <input type='text' value={input} onChange={watchValue} />
      <button onClick={search}>search</button>
    </div>
  )
}

export default Search
