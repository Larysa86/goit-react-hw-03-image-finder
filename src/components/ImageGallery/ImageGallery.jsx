
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ galleryItems, ...otherProps }) => {
  return (
    <ul className={css.ImageGallery}>
      {galleryItems.map(({ id, webformatURL, largeImageURL }) => <ImageGalleryItem
        key={id} smallImg={webformatURL} largeImg={largeImageURL} {...otherProps} />)}
    </ul>
  );
};

ImageGallery.propTypes = {
  galleryItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  })),
  onClick: PropTypes.func.isRequired,
};

