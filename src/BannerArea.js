import React from 'react';
import './styles/main.scss'

const BannerArea = () => {
    return (
      <div className= 'Banner'>
        <img className='img' src={require('./img/banner.jpg')} />
        <p className='p'> バナーって何かわからん</p>
      </div>
    )
}

export default BannerArea;
