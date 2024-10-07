import styled from 'styled-components';

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 27px;
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  
  &:checked + span {
    background: linear-gradient(90deg, hsla(21, 89%, 29%, 1) 0%, hsla(10, 84%, 30%, 1) 100%);
  }

  &:checked + span:before {
    transform: translateX(26px);
  }
`;

export const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, hsla(356, 74%, 52%, 1) 0%, hsla(27, 84%, 75%, 1) 0%, hsla(27, 64%, 65%, 1) 99%);
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
