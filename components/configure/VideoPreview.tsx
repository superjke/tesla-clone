import React from 'react'

interface IProps {
  url: string
  title: string
}

function VideoPreview(props: IProps) {
  return (
    <div className="my-10 flex flex-col text-left">
      <video className="w-full" autoPlay loop src={props.url}></video>
      <h2 className="pl-6 font-medium">{props.title}</h2>
    </div>
  )
}

export default VideoPreview
