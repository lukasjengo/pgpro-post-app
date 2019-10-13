import React from 'react';

import CustomButton from '../../components/customButton/CustomButton';

import { NotFoundBg, ContentWrapper } from './styles';

const NotFound = ({ errorBoundary }) => {
  return (
    <NotFoundBg>
      <ContentWrapper>
        <h1>{errorBoundary ? 'App crashed' : 'Page not found'}</h1>
        {!errorBoundary ? (
          <CustomButton to='/' type='secondary' isLink>
            Exit the void
          </CustomButton>
        ) : (
          <a href={`${process.env.REACT_APP_URL}`}>Reboot</a>
        )}
      </ContentWrapper>
    </NotFoundBg>
  );
};

export default NotFound;
