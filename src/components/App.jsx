
import React, { Component } from 'react';
import Searchbar from './Searchbar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import * as API from '../API/api';
import { AppStyle } from './App.styled';

const Status = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  ERROR: 'error',
  MODAL: 'modal',
};

export class App extends Component {
  state = {
    filter: '',
    images: [],
    page: 1,
    total: 0,
    status: '',
    currentImage: null,
  };
 
  async componentDidUpdate(prevProps, prevState) {
    const { filter, page } = this.state;

    if (prevState.filter !== filter || prevState.page !== page) {
      await this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { filter, page } = this.state;
    if (filter === '') {
      this.setState({ status: Status.ERROR });
      return;
    }

    this.setState({ status: Status.PENDING });

    try {
      const { hits, total } = await API.getImages(filter, page);

      this.setState(prev => ({ images: [...prev.images, ...hits] }));
      this.setState({ status: Status.RESOLVED, total: total });

      if (hits.length === 0) {
        this.setState({ status: Status.ERROR });
      }
    } catch (error) {
      console.log(error);
      this.setState({ status: Status.ERROR });
    }
  };

  handleSearchbarSubmit = filter => {
    if (this.state.filter === filter){return;}
    this.setState({ images: [], filter, page: 1 });
  };

  handleLoadMoreButtonClick = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
    setTimeout(() => this.myRef.current.scrollIntoView(),1000);
  };

  handleImageClick = image => {
    this.setState({ currentImage: image, status: 'modal' });
  };

  handleModalClose = () => {
    this.setState({ status: 'resolved' });
  };

  myRef = React.createRef();
  
  

  
  render() {
    
    const { images, status, currentImage, total } = this.state;
        return(
      <AppStyle>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />

        {images.length !== 0 && (
          <>
            <ImageGallery images={images} onClick={this.handleImageClick} />
            {status === 'resolved' && images.length !== total && (
              <div ref={this.myRef} style={{ marginRight: "auto", marginLeft: "auto", maxHeight:"40px"}}>
                <Button 
                text="Load more"
                onClick={this.handleLoadMoreButtonClick}
                            />
              </div>
            )}
          </>
        )}

        {status === Status.PENDING && <Loader />}

        {status === Status.ERROR && (alert('No image found')) }

        {status === Status.MODAL && (
          <Modal  ref={this.myRef} image={currentImage} onClose={this.handleModalClose} />
        )}
      </AppStyle>
    );
  }
}
