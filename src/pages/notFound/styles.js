import styled from 'styled-components';

import BackgroundImg from '../../assets/images/not-found-404.png';

export const NotFoundBg = styled.div`
  position: relative;
  background-image: url(${BackgroundImg});
  background-size: 35%;
  background-repeat: no-repeat;
  background-position: top;
  height: 80vh;
`;

export const ContentWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 1.5rem;

  h1 {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
`;
