import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle.styled"
import { DecorationDot } from "../../../components/decoration/DecorationDot"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Button } from "../../../components/button/Button.styled"
import { Icon } from "../../../components/icon/Icon"
import { Link } from "../../../components/link/Link.styled"

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Contact Us<DecorationDot /></SectionTitle>
            <ContactWrapper direction="column">
                <FormTitle>Get in touch</FormTitle>
                <FormWrapper>
                    <StyledForm>
                        <FlexWrapper direction="column" align="center" justify="center" gap="20px">
                            <FlexWrapper gap="10px">
                                <Field type="text" placeholder="E-mail" />
                                <Field type="text" placeholder="Phone"/>
                            </FlexWrapper>
                            <Field as={"textarea"} placeholder="Message"/>
                        </FlexWrapper>
                    </StyledForm>
                    <FlexWrapper direction="column" align="start" justify="center" width="23%">
                        <FlexWrapper>
                            <Icon iconId="location" height="50" width="50" viewBox="93 405 45 45"/>
                            <FlexWrapper direction="column">
                                <h4>Location</h4>
                                <span>Belarus</span>
                            </FlexWrapper>
                        </FlexWrapper>
                        <FlexWrapper>
                            <Icon iconId="phone" height="50" width="50" viewBox="-3 -3 30 30"/>
                            <FlexWrapper direction="column">
                                <h4>Phone</h4>
                                <span>+989150063913</span>
                            </FlexWrapper>
                        </FlexWrapper>
                        <FlexWrapper>
                            <Icon iconId="email" height="50" width="50" viewBox="-3 -3 30 30"/>
                            <FlexWrapper direction="column">
                                <h4>Email</h4>
                                <span>arkn3913@gmail.com</span>
                            </FlexWrapper>
                        </FlexWrapper>
                    </FlexWrapper>
                </FormWrapper>
                <FlexWrapper>
                    <Button background="blue" type="submit" padding="6px" borderWidth="3px" borderStyle="solid" borderRadius="9px" color="white" borderColor="blue">Send</Button>
                </FlexWrapper>
            </ContactWrapper>
            <FlexWrapper>
                <Link href="#">
                    <Icon iconId="instagramColor" height="34px" viewBox="0 0 50 50"/>
                </Link>
                <Link href="#">
                    <Icon iconId="whatsappColor" height="34px" viewBox="0 0 50 50"/>
                </Link>
                <Link href="#">
                    <Icon iconId="telegramColor" height="30px" viewBox="0 -1 50 50"/>
                </Link>
            </FlexWrapper>
            <FixedContact height="200px" direction="column" align="center" justify="center">
                <Link href="#">
                    <Icon iconId="aboutWhatsapp" viewBox="-4 -5 37 35"/>
                </Link>
                <Link href="#">
                    <Icon iconId="aboutInstagram" width="30px" viewBox="-2 -5 37 35" />
                </Link>
                <Link href="#">
                    <Icon iconId="aboutTelegram" width="45px" viewBox="0 1 37 35" />
                </Link>
            </FixedContact>
        </StyledContact>
    )
}

const StyledContact = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding-left: 75px;
    padding-right: 75px;
    padding-bottom: 96px;
    background-color: #d0f1e6;
    gap: 20px;
`

const ContactWrapper = styled(FlexWrapper)`
    padding: 50px;
    background-color: #e4eeca;
`

const FormTitle = styled.h3`
    display: flex;
    font-size: 36px;
    font-weight: 500;
`

const StyledForm = styled.form`
    max-width: 429px;
    min-width: 200px;
    width: 60%;
    display: flex;
`

const Field = styled.input`
    display: flex;
    width: 100%;
`

const FormWrapper = styled(FlexWrapper)`
    max-width: 932px;
    max-height: 462px;
    gap: 30px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;
    background-color: azure;
    margin: 30px 0px;
`
const FixedContact = styled(FlexWrapper)`
    position: fixed;
    left: 0;
    top: 60%;
    background-color: blueviolet;
    border-radius: 0 25px 25px 0;
`