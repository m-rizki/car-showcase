'use client'

import { ShowMoreProps } from '@/types'
import { useRouter } from 'next/navigation'
import { CustomButton } from '.'
import { updateSearchParams } from '@/utils'

const ShowMore = (props: ShowMoreProps) => {
  const router = useRouter()

  const handleNavigation = () => {
    const newLimit = (props.pageNumber + 1) * 10
    const newPathName = updateSearchParams('limit', `${newLimit}`)
    router.push(newPathName, { scroll: false })
  }

  return (
    <div className='w-full flex-center gap-5 mt-10'>
      {!props.isNext && (
        <CustomButton
          title='Show More'
          btnType='button'
          containerStyles='bg-primary-blue rounded-full text-white'
          handleClick={handleNavigation}
        />
      )}
    </div>
  )
}

export default ShowMore
