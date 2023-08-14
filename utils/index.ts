import { CarProps } from "@/types"

const carsAPIUrl = 'https://cars-by-api-ninjas.p.rapidapi.com/v1'

export const fetchCars = async () => {
  const headers = {
    'X-RapidAPI-Key': 'b1eb227fbdmsh60203725b492d67p1a3efajsnb23710478579',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  }

  const response = await fetch(`${carsAPIUrl}/cars?model=carrera`, {
    headers: headers,
  })

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

// TODO: Setup car 2nd API
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  // Key
}