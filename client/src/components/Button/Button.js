import styled from "styled-components"
import { Link } from "react-scroll"

export const Button = styled(Link)`
    border-radius: 5px;
    box-shadow: 1px 2px 2px ; 
    background: ${({primary}) => (primary ? '#01bf71' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontbig}) => (fontbig ? '20px' : '16px')};
    font-weight: 700;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary)};
        color: ${({secondary}) => (secondary)} 
    }
`