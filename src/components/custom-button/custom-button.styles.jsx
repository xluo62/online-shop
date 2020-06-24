import styled, {css} from 'styled-components';



const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  &:hover {
      background-color:#357ae8;
      border: none;
    }
`;

const invertedStyles = css`
   background-color: white;
   border: 1px solid black;
   color: black;
   &:hover {
       background-color: black;
       color: white;
       border: none;
   }
`;

const ButtonStyles = css`
  &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
`;



const getButtonStyles = (props) => {
    if (props.isGoogleSignIn) {
        return googleSignInStyles;
    }
    return props.inverted ? invertedStyles : ButtonStyles;
}
export const ButtonContainer = styled.button`

    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 30px 0 30px;
    font-size: 14px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Jost', sans-serif;
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
   ${getButtonStyles}

`;
