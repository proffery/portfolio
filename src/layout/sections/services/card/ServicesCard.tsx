import styled from "styled-components"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { Icon } from "../../../../components/icon/Icon"
import { Link } from "../../../../components/link/Link.styled"

type ServicesCardPropsType = {
    iconId: string,
    title: string,
    link: string
}

export const ServicesCard = (props: ServicesCardPropsType) => {
    return (
        <StyledServicesCard direction="column" justify="space-between" align="start" height="402px" width="30%">
            <Icon iconId={props.iconId} viewBox="0 0 70 70"/>
            <ServicesCardTitle>{props.title}</ServicesCardTitle>
            <Link fontSize="16px" href={props.link} color="blue">View More<Icon iconId="arrowRightBlue" width="30"/></Link>
        </StyledServicesCard>
    )
}

const StyledServicesCard = styled(FlexWrapper)`
    padding: 45px 60px;
    background-color: bisque;
    min-width: 334px;
`

const ServicesCardTitle = styled.h3`
    font-size: 32px;
    font-weight: 500;
`