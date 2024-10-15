import Link from 'next/link'

export const Header = () => {
  return (
    <header>
      <div>{}</div>
      <div>
        <Link href={'/en'}>
          <div>EN</div>
        </Link>
        <Link href={'/ru'}>
          <div>RU</div>
        </Link>
      </div>
    </header>
  )
}
