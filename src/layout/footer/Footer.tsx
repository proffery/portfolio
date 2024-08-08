import { useTranslation } from 'react-i18next'

import { credentials } from '@/common/const/data/credentials'
import { useAppContext } from '@/common/context/appContext'
import { Link } from '@/components/link/Link.styled'

import { S } from './Footer_Styles'

export const Footer = () => {
  const { theme } = useAppContext()
  const { t } = useTranslation()

  return (
    <S.Footer theme={theme}>
      <S.BackgroundImgTop height={'100%'} theme={theme} width={'100%'}></S.BackgroundImgTop>
      <S.BackgroundBottom direction={'column'} theme={theme} width={'100%'}>
        <S.Name theme={theme}>
          {t('copyrights.coded')}&nbsp;
          <Link href={`mailto:${credentials.email}?subject=${t('app_title')}`}>
            {t('copyrights.name')}
          </Link>
        </S.Name>
        <S.Copyrights theme={theme}>
          {t('copyrights.rights')} {new Date().getFullYear()}
        </S.Copyrights>
      </S.BackgroundBottom>
    </S.Footer>
  )
}
