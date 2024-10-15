export const Footer = () => {
  const date = new Date()

  return (
    <footer>
      <p>&copy; {date.getFullYear()}</p>
      <p>{}</p>
    </footer>
  )
}
