import React from 'react'
import useDeviceSize from '../../utils/hooks'

interface IProps {
  url: string
  title: string
}

function VideoPreview(props: IProps) {
  const [width, height] = useDeviceSize()
  const isMobile = width < 768
  return (
    <div className="my-10 flex flex-col space-y-2 text-left">
      <h2 className="pl-6 font-medium">{props.title}</h2>
      <video
        className="w-full"
        autoPlay={isMobile ? true : false}
        loop
        src={props.url}
      ></video>
    </div>
  )
}

export default VideoPreview
