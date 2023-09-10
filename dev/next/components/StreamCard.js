import React from 'react'
import "./streamCard.css"
const StreamCard = ({Song, Artist}) => {
  return (
    <div className='main__container'>
      <img draggable='false' className='thumbnail__image' src="https://s3-alpha-sig.figma.com/img/badf/e7ce/9fb6cdb18355919755bbe5bdce881b9f?Expires=1694390400&Signature=j7H-UzlnVFjSyAdfEOISuRQzdKFCL-y-8v7GNh2Ul6sUkZhg591gHntEiJie55O8mG1BTpZzZMZB4~r2V1IEffpX-bxoGLcCHl4-rwiC8nmO18Pkd3DK-sI83U~86-XthVPPsFbdd8lCMjgUyS2OeKgtpQD8CXrC~qARRetYP5sXk6CM-ARv-RdRqjii6ZmhClwFtsRpRoCm7wBuFz~vryjuGZx79JkZlNXGIiEIGxYp5sRb4AdXLXL95OBo~9~7rOzuU8Ga9JdvYJYt1Bd1~9I1SQOGe9yiq9gE-57hy3Sg-i-lmnMOQWgKL9XqFxn1ONO7KHlsi9sF5qR3b08nyg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
      <h2 className='songname'>{Song}</h2>
      <p className='artistname'>{Artist}</p>
      <p className='songtime'>3:56</p>
      <p className='likebtn'>Like</p>
    </div>
  )
}

export default StreamCard
