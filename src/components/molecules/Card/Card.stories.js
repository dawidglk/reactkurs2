import React from 'react';
import { theme } from 'theme/mainTheme';
import Card from './Card';

export default {
  component: Card,
  title: 'Card',
};

export const note = () => <Card theme={theme} cardType="note" />;
export const twitter = () => <Card theme={theme} cardType="twitter" />;
export const articles = () => <Card theme={theme} cardType="article" />;
