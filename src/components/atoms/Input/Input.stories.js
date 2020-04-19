import React from 'react';
import { theme } from 'theme/mainTheme';
import Input from './Input';

export default {
  component: Input,
  title: 'Input',
};

export const InputSearch = () => (
  <Input search placeholder="search" theme={theme} />
);
