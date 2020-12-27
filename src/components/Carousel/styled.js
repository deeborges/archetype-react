import styled from 'styled-components';
// import { ReactComponent as ArrowLeft } from '../../assets/images/arrow-left.svg';
// import { ReactComponent as ArrowRight } from '../../assets/images/arrow-right.svg';

export const Wrapper = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex: 1;
  margin-top: 2rem;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  height: auto;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImagemPrincipalContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
`;

export const ImagePrincipal = styled.img`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  border: 1px solid #dfe2e5;
  border-radius: 8px;
  height: 256px;
  width: 256px;
`;

export const ImageChildrenContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: space-around;
  margin-top: 1.5rem;
`;

export const ImageChildren = styled.img`
  border: 1px solid rgb(223, 226, 229);
  border-radius: 8px;
  height: 56px;
  position: relative;
  width: 56px;
`;

// export const IconArrowLeft = styled(ArrowLeft)`
//   &:hover {
//     cursor: pointer;
//   }
// `;

// export const IconArrowRight = styled(ArrowRight)`
//   &:hover {
//     cursor: pointer;
//   }
// `;

export const ImageDescription = styled.p`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: center;
  padding: 20px;
  font-family: 'Publinc-Sans', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
`;
