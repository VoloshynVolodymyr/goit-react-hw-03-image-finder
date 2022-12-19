import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Ul } from './ImageGallery.styled';

export default function ImageGallery({ images, ...otherProps }) {
  return (
    <Ul>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} {...otherProps} />
      ))}
    </Ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};