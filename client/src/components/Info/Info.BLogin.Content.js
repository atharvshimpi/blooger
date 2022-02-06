import React from "react"
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from "./Info.BLoginElements"
import { Button } from "../Button/Button"

export default function Info_BLogin_Content ({id, BGcolor, imgStart, topLine, lightText, darkText, headline, description, buttonLabel, img, alt, primary, secondary, dark}) {

        return(
            <>
                <InfoContainer BGcolor={BGcolor} id={id}>
                    <InfoWrapper>
                        <InfoRow imgStart={imgStart}>
                            <Column1>
                                <TextWrapper>
                                    <TopLine>{topLine}</TopLine>
                                    <Heading lightText={lightText}>{headline}</Heading>
                                    <Subtitle darkText={darkText}>{description}</Subtitle>
                                    <BtnWrap>
                                        <Button to="home"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary}
                                        secondary={secondary}
                                        dark={dark ? 1 : 0}
                                        onClick={() => window.location = "/signup"}
                                        >{buttonLabel}</Button>
                                    </BtnWrap>
                                </TextWrapper>
                            </Column1>
                            <Column2>
                                <ImgWrap>
                                    <Img src={img} alt={alt} />
                                </ImgWrap>
                            </Column2>
                        </InfoRow>
                    </InfoWrapper>
                </InfoContainer>
            </>
        )
}