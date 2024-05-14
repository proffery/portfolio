import { Link } from "../../components/link/Link.styled"
import { ThemeContext } from "../../common/context/ThemeContext"
import { useContext } from "react"
import { S } from "./Footer_Styles"

export const Footer: React.FC = () => {
    const theme = useContext(ThemeContext)
    return (
        <S.Footer theme={theme}>
            <S.BackgroundImgTop theme={theme} height="100%" width="100%"></S.BackgroundImgTop>
            <S.BackgroundBottom theme={theme} direction="column" width="100%">
                <S.Name theme={theme}>Coded by&nbsp;<Link href="mailto:proffery@gmail.com?subject=Mail from Portfolio">Dmitry Shamko</Link></S.Name>
                <S.Copyrights theme={theme}>All Rights Reserved {new Date().getFullYear()}</S.Copyrights>
            </S.BackgroundBottom>
        </S.Footer>
    )
}