import React, { useState } from 'react';
import {
  Container,
  Content,
  ImageChildren,
  // IconArrowLeft,
  // IconArrowRight,
  ImageChildrenContainer,
  ImageDescription,
  ImagePrincipal,
  ImagemPrincipalContainer,
  Wrapper
} from './styles';

export const Carousel = ({ data }) => {
  const [images] = useState(data);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagesLength = Object.keys(data).length;

  const prevImage = () => {
    const reset = currentImageIndex === 0;
    const index = reset ? imagesLength - 1 : currentImageIndex - 1;
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    const reset = currentImageIndex === imagesLength - 1;
    const index = reset ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(index);
  };

  return (
    <Wrapper>
      <Container>
        <Content>
          <ImagemPrincipalContainer>
            <ImagePrincipal src={images[currentImageIndex].url} />
          </ImagemPrincipalContainer>

          <ImageChildrenContainer>
            <button onClick={prevImage} value=">" />
            {/* <IconArrowLeft onClick={prevImage} /> */}
            {images.map((image, key) => (
              <div key={key} onClick={() => setCurrentImageIndex(key)}>
                {!image?.url ? (
                  <ImageChildren />
                ) : (
                  <ImageChildren src={image.url} />
                )}
              </div>
            ))}
            <button onClick={nextImage} value=">" />
            {/* <IconArrowRight onClick={nextImage} /> */}
          </ImageChildrenContainer>
          <ImageDescription>
            {images[currentImageIndex]?.description}
          </ImageDescription>
        </Content>
      </Container>
    </Wrapper>
  );
};
