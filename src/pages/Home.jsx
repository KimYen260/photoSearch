import React, { useState } from 'react'

import Search from '../components/Search.jsx'
import Picture from '../components/Picture.jsx'
import { useEffect } from 'react'

const Home = () => {
  const [input, setInput] = useState('')
  const [data, setData] = useState(null)

  const auth = '563492ad6f91700001000001608250b352dd4be59995dfb2814b7a68'
  const initialURL = 'https://api.pexels.com/v1/curated?page=1&per_page=15'
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`

  const search = async (url) => {
    const fetchData = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: auth,
      },
    })
    const parsedData = await fetchData.json()
    setData(parsedData.photos)
  }

  useEffect(() => {
    search(initialURL)
  }, [])

  return (
    <div>
      <Search
        search={() => {
          search(searchURL)
        }}
        setInput={setInput}
      />
      <div className='pictures'>
        {data &&
          data.map((d) => {
            return <Picture data={d} />
          })}
      </div>
    </div>
  )
}

export default Home
