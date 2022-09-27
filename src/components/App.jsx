import { GlobalStyle } from './GlobalStyle';
import React from 'react';
import { Phonebook } from './Phonebook/Phonebook';

export const App = () => {
  return (
    <>
      <Phonebook />
      <GlobalStyle />
    </>
  );
};
