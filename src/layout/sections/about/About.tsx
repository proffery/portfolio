import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle.styled"
import { Icon } from "../../../components/icon/Icon"
import { Link } from "../../../components/link/Link.styled"
import { S } from "./About_Styles"
import { useAppContext } from "../../../common/context/appContext";
import { themeObj } from "../../../common/const/themeObj";
import {extractNumberFromString} from "../../../common/utils/extractNumberFromString";

export const About = () => {
    const {theme, width} = useAppContext()

    const breakpoint = extractNumberFromString(themeObj.media.mobile)

    const todayDate = new Date()
    const myBirthdayDate = new Date(1987, 6, 16, 14, 45, 0)
    const expDate = new Date(2023, 1, 1, 0, 0, 1)
    const expYears = new Date(todayDate.getTime() - expDate.getTime()).getFullYear() - 1970
    const myYears = new Date(todayDate.getTime() - myBirthdayDate.getTime()).getFullYear() - 1970

    return (
        <S.About theme={theme} id="about">
            <S.AboutContainer theme={theme} direction="column" >
                {width > breakpoint && <SectionTitle theme={theme} color="white">About me</SectionTitle>}
                <S.AboutBanner theme={theme} direction="column" align="center" wrap="wrap" justify="center">
                    <S.SocialLinksWrapper align="center" >
                        <Link href="https://github.com/proffery" aria-label="GitHub page link">
                            <Icon iconId="gitHub" height="50px" width="50px" viewBox="-90 -60 260 260" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/dmitryshamko/" aria-label="LinkedIn account" >
                            <Icon iconId="linkedIn" width="30px" viewBox="-25 -12 158 158" />
                        </Link>
                        <Link href="https://t.me/ShamkoDmitry" aria-label="Telegram link" >
                            <Icon iconId="aboutTelegram" width="46px" viewBox="-4 0 35 35" />
                        </Link>
                    </S.SocialLinksWrapper>
                    <FlexWrapper direction="column" gap={'10px'} align="flex-start" wrap="wrap" >
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