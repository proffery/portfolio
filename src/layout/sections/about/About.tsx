import { FlexWrapper } from "../../../components/FlexWrapper"
import { Link } from "../../../components/link/Link.styled"
import { Icon } from "../../../components/icon/Icon"
import { useContext, useEffect, useState} from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { S } from "./About_Styles"
import { SectionTitle } from "../../../components/SectionTitle.styled"

export const About = () => {
    const theme = useContext(ThemeContext)
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
    
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])
    
    return (
        <S.About theme={theme} id="about">
                <S.AboutContainer theme={theme} direction="column" >
                {width > breakpoint && <SectionTitle theme={theme} color="white">About me</SectionTitle>}
                    <S.AboutBanner theme={theme} direction="column" align="center" wrap="wrap" justify="center">
                        <S.SocialLinksWrapper align="center" >
                            <Link href="#" aria-label="Open Whatsapp group">
                                <Icon iconId="aboutWhatsapp" />
                            </Link>
                            <Link href="#" aria-label="Open Instagram account" >
                                <Icon iconId="aboutInstagram" width="30px"/>
                            </Link>
                            <Link href="#" aria-label="Open Telegram group" >
                                <Icon iconId="aboutTelegram" width="46px" viewBox="-4 -2 37 35" />
                            </Link>
                        </S.SocialLinksWrapper>
                        <FlexWrapper direction="column" align="flex-start" wrap="wrap" >
                            <S.AboutBannerTitle>I’m&nbsp;</S.AboutBannerTitle>
                            <S.AboutBannerTitle><Link href="#">Dmitry Shamko</Link></S.AboutBannerTitle>
                            <S.AboutBannerList theme={theme}>
                                <li>I was born in Belarus</li>
                                <li>I’m 36 years old</li>
                                <li>I have started my interest in this field from 2022</li>
                                <li>I’m web developer</li>
                                <li>My phone number +375256979075</li>
                            </S.AboutBannerList>
                        </FlexWrapper>
                    </S.AboutBanner>
                </S.AboutContainer>
        </S.About>
    )
}