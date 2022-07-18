import React from 'react'

function Picture({ data }) {
  return (
    <div className='pictures'>
      <div className='picture'>
        <div className='imgContainer'>
          <img src={data.urls.small} alt='' />
        </div>
        <div className='wrap'>
          <p>{data.user.name}</p>
          <p>
            <a target='_blank' rel='noreferrer' href={data.urls.small}>
              Download
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Picture
