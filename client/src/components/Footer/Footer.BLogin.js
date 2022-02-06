import React, { Component } from "react"
import { FooterBLoginContainer, FooterBLoginWrapper, FooterBLoginLinkWrapper, FooterBLoginLinkTitle, FooterBLoginLink, FooterBLoginHR, FooterBLoginCopyrightContent, FooterBLoginTerms, FooterBLoginTermsLink, FooterBLoginTermsMarginRight, FooterBLoginLanguage, FooterBLoginLanguageOption } from "./Footer.BLogin.Elements"

export default class FooterBLogin extends Component {

    render() {
        return(
            <>
                <FooterBLoginContainer>
                    <FooterBLoginWrapper>
                        <FooterBLoginLinkWrapper>
                            <FooterBLoginLinkTitle>Help</FooterBLoginLinkTitle>
                            <FooterBLoginLink to="/">Help Center</FooterBLoginLink>
                            <FooterBLoginLink to="/">Help Forum</FooterBLoginLink>
                        </FooterBLoginLinkWrapper>
                        <FooterBLoginLinkWrapper>
                            <FooterBLoginLinkTitle>Community</FooterBLoginLinkTitle>
                            <FooterBLoginLink to="/">Contact Us</FooterBLoginLink>
                        </FooterBLoginLinkWrapper>
                        <FooterBLoginLinkWrapper>
                            <FooterBLoginLinkTitle>Developers</FooterBLoginLinkTitle>
                            <FooterBLoginLink to="/">Blooger API</FooterBLoginLink>
                            <FooterBLoginLink to="/">Developer Forum</FooterBLoginLink>
                        </FooterBLoginLinkWrapper>
                    </FooterBLoginWrapper>
                    <FooterBLoginHR />
                <FooterBLoginCopyrightContent>
                    <FooterBLoginTerms>
                        <FooterBLoginTermsLink to="/terms">Terms of Service</FooterBLoginTermsLink>
                        <FooterBLoginTermsMarginRight />
                        <FooterBLoginTermsLink to="/privacy">Privacy</FooterBLoginTermsLink>
                        <FooterBLoginTermsMarginRight />
                        <FooterBLoginTermsLink to="/content-policy">Content Policy</FooterBLoginTermsLink>
                    </FooterBLoginTerms>
                    <FooterBLoginLanguage>
                        <FooterBLoginLanguageOption>English</FooterBLoginLanguageOption>
                        <FooterBLoginLanguageOption>Hindi</FooterBLoginLanguageOption>
                        <FooterBLoginLanguageOption>Marathi</FooterBLoginLanguageOption>
                        <FooterBLoginLanguageOption>Urdu</FooterBLoginLanguageOption>
                    </FooterBLoginLanguage>
                </FooterBLoginCopyrightContent>
                </FooterBLoginContainer>
            </>
        )
    }
}