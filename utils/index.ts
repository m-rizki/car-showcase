import { CarProps, FilterProps } from '@/types'

const carsAPIUrl = 'https://cars-by-api-ninjas.p.rapidapi.com/v1'
// const carsImaginUrl = 'https://cdn.imagin.studio/getimage'

export const fetchCars = async (filters: FilterProps) => {
  const { manufacturer, year, model, limit, fuel } = filters

  const headers = {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY || '',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  }

  const response = await fetch(
    `${carsAPIUrl}/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  )

  const result = await response.json()

  return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50 // Base rental price per day in dollars
  const mileageFactor = 0.1 // Additional rate per mile driven
  const ageFactor = 0.05 // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor
  const ageRate = (new Date().getFullYear() - year) * ageFactor

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

  return rentalRatePerDay.toFixed(0)
}

// Setup car 2nd API -> unused for now
// export const generateCarImageUrl = (car: CarProps, angle?: string) => {
//   // hrjavascript-mastery
//   // source = https://gist.github.com/adrianhajdin/e41751d170881f32955f556aaa45c77c
//   const url = new URL(carsImaginUrl)

//   const { make, year, model } = car

//   url.searchParams.append('customer', 'hrjavascript-mastery' || '')
//   url.searchParams.append('make', make)
//   url.searchParams.append('modelFamily', model.split(' ')[0])
//   url.searchParams.append('zoomType', 'fullscreen')
//   url.searchParams.append('modelYear', `${year}`)
//   url.searchParams.append('angle', `${angle ? angle: ''}`)

//   return `${url}`
// }

export const generateCarImageUrl = (make?: string, angle?: string) => {
  if (!make) {
    make = 'bmw'
  }

  if (!angle) {
    return `cars/${make}/model.png`
  }

  return `cars/${make}/model_angle_${angle}.png`
}

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search)

  searchParams.set(type, value)

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`

  return newPathName
}
