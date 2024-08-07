import { themeObj } from '@/common/const/themeObj'
import { useAppContext } from '@/common/context/appContext'
import { extractNumberFromString } from '@/common/utils/extractNumberFromString'
import { FlexWrapper } from '@/components/FlexWrapper'
import { SectionTitle } from '@/components/SectionTitle.styled'
import { Icon } from '@/components/icon/Icon'
import { Link } from '@/components/link/Link.styled'

import { S } from './About_Styles'

export const About = () => {
  const { theme, width } = useAppContext()

  const breakpoint = extractNumberFromString(themeObj.media.mobile)

  const todayDate = new Date()
  const myBirthdayDate = new Date(1987, 6, 16, 14, 45, 0)
  const expDate = new Date(2023, 1, 1, 0, 0, 1)
  const expYears = new Date(todayDate.getTime() - expDate.getTime()).getFullYear() - 1970
  const myYears = new Date(todayDate.getTime() - myBirthdayDate.getTime()).getFullYear() - 1970

  return (
    <S.About id={'about'} theme={theme}>
      <S.AboutContainer direction={'column'} theme={theme}>
        {width > breakpoint && (
          <SectionTitle color={'white'} theme={theme}>
            About me
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
            <Link aria-label={'GitHub page link'} href={'https://github.com/proffery'}>
              <Icon height={'50px'} iconId={'gitHub'} viewBox={'-90 -60 260 260'} width={'50px'} />
            </Link>
            <Link
              aria-label={'LinkedIn account'}
              href={'https://www.linkedin.com/in/dmitryshamko/'}
            >
              <Icon iconId={'linkedIn'} viewBox={'-25 -12 158 158'} width={'30px'} />
            </Link>
            <Link aria-label={'Telegram link'} href={'https://t.me/ShamkoDmitry'}>
              <Icon iconId={'aboutTelegram'} viewBox={'-4 0 35 35'} width={'46px'} />
            </Link>
          </S.SocialLinksWrapper>
          <FlexWrapper align={'flex-start'} direction={'column'} gap={'10px'} wrap={'wrap'}>
            <S.AboutBannerTitle>About me:</S.AboutBannerTitle>
            <S.AboutBannerList theme={theme}>
              <li>I was born in Belarus</li>
              <li>I’m web developer</li>
              <li>I have my interest in this field more than {expYears} years</li>
              <li>I’m {myYears} years old</li>
              <li>My phone number +375256979075</li>
            </S.AboutBannerList>
          </FlexWrapper>
        </S.AboutBanner>
      </S.AboutContainer>
    </S.About>
  )
}
