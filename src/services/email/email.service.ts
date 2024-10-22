import { baseApi } from '@/services/base-api'
import { SendEmailRequest } from '@/services/email/email.types'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    sendEmail: builder.mutation<void, SendEmailRequest>({
      invalidatesTags: [],
      query: body => ({
        body,
        method: 'POST',
        url: process.env.NEXT_PUBLIC_EMAILJS_URL ?? '/',
      }),
    }),
  }),
})

export const { useSendEmailMutation } = authService
