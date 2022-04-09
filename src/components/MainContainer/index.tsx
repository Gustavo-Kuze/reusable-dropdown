import React from 'react';
import { MainContainerStyle } from './styledComponents';

const MainContainer: React.FC = ({ children }) => {
  return <MainContainerStyle>{children}</MainContainerStyle>;
};

export default MainContainer;
