import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/leaf.svg';
// const OptionContainerStyles = css`
//     margin-top: 5px;
//     padding: 10px 15px;
//     cursor: pointer;
//     text-decoration: none;
//     color:black;
//     font-size: 1.2rem;
//     display: flex;
//     flex-direction: column;
// `;
export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
    margin-bottom: 25px;
`;
export const LogoModifier = styled(Logo)`
    width: 3.5rem;
`;
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
    margin-top: 5px;
    padding: 10px 15px;
    cursor: pointer;
    text-decoration: none;
    color:black;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
`;

export const SignOut = styled.div`
  margin-left: auto;
`;