
import styled from 'styled-components';
import { MyAnimation } from './styles/animations/Animations';

export const StyledBtn = styled.button`
  border: 0;
  background-color: #fb3f78;
  padding: 10px 20px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;
  
  &:hover {
    background-color: aqua;
  }

  &:last-child {
    background-color: bisque;
  }
`

export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: blueviolet;
  color: lightcoral;
  &:hover {
    animation: ${MyAnimation} 2s ease-in-out infinite;
  }
`