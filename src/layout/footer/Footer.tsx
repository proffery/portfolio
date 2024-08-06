import { useAppContext } from '../../common/context/appContext'
import { Link } from '../../components/link/Link.styled'
import { S } from './Footer_Styles'

export const Footer = () => {
  const { theme } = useAppContext()

  return (
    <S.Footer theme={theme}>
      <S.BackgroundImgTop height={'100%'} theme={theme} width={'100%'}></S.BackgroundImgTop>
      <S.BackgroundBottom direction={'column'} theme={theme} width={'100%'}>
        <S.Name theme={theme}>
          Coded by&nbsp;
          <Link href={'mailto:proffery@gmail.com?subject=Mail from Portfolio'}>Dmitry Shamko</Link>
        </S.Name>
        <S.Copyrights theme={theme}>All Rights Reserved {new Date().getFullYear()}</S.Copyrights>
      </S.BackgroundBottom>
    </S.Footer>
  )
}
