import React from 'react';
import plus from 'assets/icons/plus.svg';
import bulb from 'assets/icons/bulb.svg';
import logout from 'assets/icons/logout.svg';
import styled from 'styled-components';
import ButtonIcon from './ButtonIcon';

const WrapperYellow = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: yellow;
`;

export default {
  component: ButtonIcon,
  title: 'ButtonIcon',
};

export const plusButon = () => (
  <WrapperYellow>
    <ButtonIcon icon={plus} active />
  </WrapperYellow>
);
export const bulbButon = () => <ButtonIcon icon={bulb} active />;

export const logButon = () => (
  <WrapperYellow>
    <ButtonIcon icon={logout} />
  </WrapperYellow>
);
