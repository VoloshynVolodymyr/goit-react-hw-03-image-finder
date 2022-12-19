import PropTypes from 'prop-types';
import { Component } from 'react';
import { Li, ImageGalleryItemImage } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  static propTypes = {
    image: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onImageClick = () => {
    const { image, onClick } = this.props;
    onClick(image);
  };

  render() {
    const { image } = this.props;
    const { webformatURL } = image;
    return (
      <Li onClick={this.onImageClick}>
        <ImageGalleryItemImage src={webformatURL} alt={webformatURL} />
      </Li>
    );
  }
}

export default ImageGalleryItem;