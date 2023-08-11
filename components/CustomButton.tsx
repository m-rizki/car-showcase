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
      <span className={`flex-1 ${props.textStyles}`}>{props.title}</span>
      {props.rightIcon && (
        <div className='relative w-6 h-6'>
          <Image src={props.rightIcon} alt='right icon' fill className='object-contain'/>
        </div>
      )}
    </button>
  )
}

export default CustomButton
