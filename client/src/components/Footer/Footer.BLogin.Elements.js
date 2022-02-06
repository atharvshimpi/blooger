import styled from "styled-components"
import { Link } from "react-router-dom"

export const FooterBLoginContainer = styled.footer`
    background: #101522;
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`

export const FooterBLoginWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        margin-left: 70px;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
`

export const FooterBLoginLinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10ps;
        width: 100%;
    }
`

export const FooterBLoginLinkTitle = styled.h1`
    font-size: 20px;
    margin-bottom: 16px;
`

export const FooterBLoginLink = styled(Link)`
    color: #cbd1d3;
    margin-bottom: 0.5rem;
    text-decoration: none;
    font-size: 16px;

    &:hover {
        color: #438d80;
        transition: 0.3s ease-out;
    }
`

export const FooterBLoginHR = styled.hr`
    width: 80%;
    border: 0 solid transparent;
    border-bottom: 0.0625rem solid #333;
    color: #fff;
    background: #fff;
`

export const FooterBLoginCopyrightContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    height: 10vh;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        margin: 20px 0;
    }
`

export const FooterBLoginTerms = styled.div`
    display: flex;
`

export const FooterBLoginTermsLink = styled(Link)`
    display: flex;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    color: #cbd1d3;
    padding: 0 10px;
    margin-right: 10px;
`

export const FooterBLoginTermsMarginRight = styled.li`
    list-style: none;    
    width: 0.125rem;
    height: 0.625rem;
    color: #cbd1d3;
    background: #fff;
    margin-top: 8px;
`

export const FooterBLoginLanguage = styled.select`
    display: block !important;
    padding: 0 !important;
    width: 8rem;
    height: 1.5rem;
    border-radius: 5px;
    background: gray;
    outline: none !important;
    transition: all 0.3s ease-out;
    border: 0;

    @media screen and (max-width: 768px) {
        margin: 20px 0;
    }
`

export const FooterBLoginLanguageOption = styled.option`

`