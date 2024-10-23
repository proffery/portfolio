import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

export const getEmailErrorMessage = (error: FetchBaseQueryError | SerializedError | undefined) => {
  let errorMessage = undefined

  if (error && 'status' in error && Number(error.status) >= 400) {
    errorMessage = (error.data as string) ? (error.data as string) : JSON.stringify(error)
  }

  return errorMessage
}
