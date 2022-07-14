import React from 'react'

function Picture({ data }) {
  return (
    <div className='pictures'>
      <div className='picture'>
        <div className='imgContainer'>
          <img src={data.src.medium} alt='' />
        </div>
        <div className='wrap'>
          <p>{data.photographer}</p>
          <p>
            <a target='_blank' rel='noreferrer' href={data.src.medium}>
              Download
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Picture
