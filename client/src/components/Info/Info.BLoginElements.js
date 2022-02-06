import styled from "styled-components"
import { MdKeyboardArrowDown } from "react-icons/md"

//Info.BLogin.Header Elements

export const InfoBLoginContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-bottom: 80vh;

    @media screen and (max-width: 768px) {
        margin-bottom: 77vh;
    }

    @media screen and (max-width: 1324px) {
        margin-bottom: 77vh;
    }
`

export const InfoBLoginBG = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
    margin-top: 10vh;
`

export const VideoBG = styled.video`
    width: 100%;
    min-height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a24;
`

export const InfoBLoginContent = styled.div`
    width: auto;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100vh;

    @media screen and (max-width: 768px) {
        margin-top: 100vh;
    }

    @media screen and (max-width: 640px) {
        margin-top: 100vh;
    }
`

export const InfoBLoginH1 = styled.h1`
    color: #333;
    font-size: 3rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const InfoBLoginP = styled.p`
    margin-top: 24px;
    color: #fff;
    text-align: center;
    font-size: 24px;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const InfoBLoginBtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`

export const InfoBLoginEnd = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`

export const InfoBLoginCircle = styled.div`
    background: #333;
    height: 50px;
    width: 50px;
    border-radius: 50px;
`

export const InfoBLoginDwnArrow = styled(MdKeyboardArrowDown)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    padding: auto;
    margin: auto;
`

//Info.BLogin.Content Elements

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({BGcolor}) => (BGcolor)};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: auto;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    font-weight: 600;
    color: ${({lightText}) => lightText ? '#f7f8f8' : '#333'};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 700px;
    margin-bottom: 35px;
    font-size: 25px;
    line-height: 30px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding: 0 20px;
`