import React, { useState, useEffect } from 'react'

import Search from '../components/Search.jsx'
import Picture from '../components/Picture.jsx'

function Home() {
  const [input, setInput] = useState('')
  const [data, setData] = useState(null)
  const [page, setPage] = useState(2)
  const [keepPage, setKeepPage] = useState('')

  // const utm = '&utm_source=Photo-app&utm_medium=referral'
  const auth = 'WnAKI9uPmOhHcLnMh3-djLjc6nkRl7tBHcYywooZrVI'
  const initialURL = `https://api.unsplash.com/photos/?client_id=${auth}&page=1&per_page=15`
  const searchURL = `https://api.unsplash.com/search/photos/?query=${input}&per_page=15&page=1&client_id=${auth}`

  //click for search
  const search = async (url) => {

    if (input === ''){
      url = initialURL
    }
    const fetchData = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: auth,
      },
    })
    const parsedData = await fetchData.json()
    if (Array.isArray(parsedData)) {
      setData(parsedData)
    } else {
      setData(parsedData.results)
    }
    //無法search的原因在於input搜尋後unsplash回傳的不是同樣的陣列，而是物件

    setKeepPage(input)
    setInput('')
  }

  // click for more
  const loadMore = async () => {
    let newURL
    if (keepPage === '') {
      newURL = `https://api.unsplash.com/photos/?client_id=${auth}&page=${page}&per_page=15`
    } else {
      newURL = `https://api.unsplash.com/search/photos/?query=${keepPage}&per_page=15&page=${page}&client_id=${auth}`
    }

    setPage(page + 1)

    const fetchData = await fetch(newURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: auth,
      },
    })
    const parsedData = await fetchData.json()
    if (Array.isArray(parsedData)) {
      setData(data.concat(parsedData))
    } else {
      setData(data.concat(parsedData.results))
    }
  }

  // data fetch when the page loads up
  useEffect(() => {
    if (!data) search(initialURL)
  })

  useEffect(() => {
    if (input === '') {
      search(initialURL)
    } else {
      search(searchURL)
    }
  }, [])

  return (
    <div>
      <Search
        search={() => {
          search(searchURL)
        }}
        setInput={setInput}
        input={input}
      />
      <div className='pictures'>
        {data && data.map((d) => <Picture data={d} key={d.blur_hash} />)}
      </div>
      <div className='more'>
        <button onClick={loadMore}>more...</button>
      </div>
    </div>
  )
}

export default Home
