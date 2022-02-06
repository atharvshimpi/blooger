import React, { Component } from "react";
import { InfoBLoginContainer, VideoBG, InfoBLoginBG, InfoBLoginContent, InfoBLoginH1, InfoBLoginP, InfoBLoginBtnWrapper } from "./Info.BLoginElements";
import { Button } from "../Button/Button";
import Video from "../../assets/videos/bg.mp4";

export default class InfoBLogin extends Component {

    render() {
        return(
            <InfoBLoginContainer>
                <InfoBLoginBG>
                    <VideoBG 
                        autoPlay
                        muted
                        loop
                        src={ Video }
                        type="video/mp4"
                    />
                </InfoBLoginBG>
                <InfoBLoginContent>
                    <InfoBLoginH1>
                        Publish your passions, your way
                    </InfoBLoginH1>
                    <InfoBLoginP>
                        Create a unique and beautiful blog. It’s easy and free.
                    </InfoBLoginP>
                    <InfoBLoginBtnWrapper>
                        <Button
                            primary="#fff"
                            dark="true"
                            onClick={() => window.location = ('/signin')}
                        >CREATE YOUR BLOG</Button>
                    </InfoBLoginBtnWrapper>
                </InfoBLoginContent>
            </InfoBLoginContainer>
        )
    }
}