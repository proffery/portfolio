import { useTranslation } from 'react-i18next'

import { credentials } from '@/common/const/data/credentials'
import { themeObj } from '@/common/const/themeObj'
import { useAppContext } from '@/common/context/appContext'
import { useWidth } from '@/common/customHooks/useWidth'
import { extractNumberFromString } from '@/common/utils/extractNumberFromString'
import { FlexWrapper } from '@/components/FlexWrapper'
import { SectionTitle } from '@/components/SectionTitle.styled'
import { Icon } from '@/components/icon/Icon'
import { Link } from '@/components/link/Link.styled'

import { S } from './About_Styles'

export const About = () => {
  const { theme } = useAppContext()
  const width = useWidth()
  const { t } = useTranslation()

  const breakpoint = extractNumberFromString(themeObj.media.mobile)

  return (
    <S.About id={'about'} theme={theme}>
      <S.AboutContainer direction={'column'} theme={theme}>
        {width > breakpoint && (
          <SectionTitle color={'white'} theme={theme}>
            {t('about.title')}
          </SectionTitle>
        )}
        <S.AboutBanner
          align={'center'}
          direction={'column'}
          justify={'center'}
          theme={theme}
          wrap={'wrap'}
        >
          <S.SocialLinksWrapper align={'center'}>
            <Link
              aria-label={'GitHub page link'}
              href={credentials.link_github}
              rel={'noopener'}
              target={'_blank'}
            >
              <Icon height={'50px'} iconId={'gitHub'} viewBox={'-90 -60 260 260'} width={'50px'} />
            </Link>
            <Link
              aria-label={'LinkedIn account'}
              href={credentials.link_linkedin}
              rel={'noopener'}
              target={'_blank'}
            >
              <Icon iconId={'linkedIn'} viewBox={'-25 -12 158 158'} width={'30px'} />
            </Link>
            <Link
              aria-label={'Telegram link'}
              href={credentials.link_telegram}
              rel={'noopener'}
              target={'_blank'}
            >
              <Icon iconId={'aboutTelegram'} viewBox={'-4 0 35 35'} width={'46px'} />
            </Link>
          </S.SocialLinksWrapper>
          <FlexWrapper align={'flex-start'} direction={'column'} gap={'10px'} wrap={'wrap'}>
            <S.AboutBannerTitle>{t('about.title')}:</S.AboutBannerTitle>
            <S.AboutBannerList theme={theme}>
              <li>{t('about.items.item1')}</li>
              <li>{t('about.items.item2')}</li>
              <li>{t('about.items.item3')}</li>
              <li>{t('about.items.item4')}</li>
              <li>{t('about.items.item5')}</li>
            </S.AboutBannerList>
          </FlexWrapper>
        </S.AboutBanner>
      </S.AboutContainer>
    </S.About>
  )
}
