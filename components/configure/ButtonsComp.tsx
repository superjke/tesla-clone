import React from 'react'

const ButtonsComp = (props: { nameLeft: string; nameRight: string }) => {
  return (
    <>
      <div className="flex w-[160px] items-center justify-center rounded-3xl bg-blue text-sm font-medium uppercase text-white">
        {props.nameLeft}
      </div>
      <div className="flex w-[160px] items-center justify-center rounded-3xl bg-gray-100 text-sm uppercase text-black">
        {props.nameRight}
      </div>
    </>
  )
}

export default ButtonsComp
