'use client'
import { CustomButtonProps } from '@/types'
import Image from 'next/image'

const CustomButton = (props: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={props.btnType || 'button'}
      className={`custom-btn ${props.containerStyles}`}
      onClick={props.handleClick}
    >
      <span className={`flex-1`}>{props.title}</span>
    </button>
  )
}

export default CustomButton
