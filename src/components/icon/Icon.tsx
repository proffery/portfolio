import { type } from 'os'
import iconsSprite from '../../assets/images/icons-sprite.svg'


type IconPropsType = {
    iconId: string,
    viewBox?: string,
    width?: string,
    height?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={props.viewBox || "0 0 50 50"} width={props.width || "50px"} height={props.height || "50px"}>
            <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
        </svg>
    )
}