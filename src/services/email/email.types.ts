export type SendEmailRequest = {
  service_id?: string
  template_id?: string
  template_params: {
    message: string
    user_email: string
    user_name: string
  }
  user_id?: string
}
