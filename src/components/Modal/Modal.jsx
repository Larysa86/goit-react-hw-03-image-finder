import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export class Modal extends Component {

  static propTypes = {
    image: PropTypes.string.isRequired,
    onModalClose: PropTypes.func.isRequired,
  };

  closeModalOnEsc = e => {
    if (e.code === 'Escape') {
      this.props.onModalClose('');
    }
  };

  handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onModalClose('');
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeModalOnEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalOnEsc);
  }

  render() {
    const { image } = this.props;
    return (
      <div className={css.Overlay} onClick={this.handleBackDropClick}>
        <div className={css.Modal}>
          <img src={image} alt='' />
        </div>
      </div>
    );
  }
}









