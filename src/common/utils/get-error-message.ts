import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

export const getErrorMessage = (error: FetchBaseQueryError | SerializedError | undefined) => {
  let errorMessage = ''

  if (error && 'originalStatus' in error && error.originalStatus !== 200) {
    errorMessage = error.data as string
  }

  return errorMessage
}
