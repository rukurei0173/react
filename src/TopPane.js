import React from 'react';
import BannerArea from './BannerArea'
import LocalProduct from './LocalProduct'
import Lank from './Lank'
import CategorySearch from './CategorySearch'
import './styles/main.scss'

const TopPane = () => {
  return (
    <div>
      <div className='header'>Tax Free Online.jp</div>
      <BannerArea/>
      <div className='item'>各地の名産品</div>
      <LocalProduct pattern='1'/>
      <div className='item'>人気お土産ランキング</div>
      <Lank pattern='1'/>
      <div className='item'>カテゴリ検索</div>
      <CategorySearch/>
      <div className='kuhaku' />


      <div className='header'>Tax Free Online.jp</div>
      <BannerArea/>
      <div className='item'>各地の名産品</div>
      <LocalProduct pattern='2'/>
      <div className='item'>人気お土産ランキング</div>
      <Lank pattern='2'/>
      <div className='item'>カテゴリ検索</div>
      <CategorySearch/>
      <div className='kuhaku' />

      <div className='header'>Tax Free Online.jp</div>
      <BannerArea/>
      <div className='item'>各地の名産品</div>
      <LocalProduct pattern='3'/>
      <div className='item'>人気お土産ランキング</div>
      <Lank pattern='3'/>
      <div className='item'>カテゴリ検索</div>
      <CategorySearch/>
      <div className='kuhaku' />

      <div className='header'>Tax Free Online.jp</div>
      <BannerArea/>
      <div className='item'>各地の名産品</div>
      <LocalProduct pattern='4'/>
      <div className='item'>人気お土産ランキング</div>
      <Lank pattern='4'/>
      <div className='item'>カテゴリ検索</div>
      <CategorySearch/>
      <div className='kuhaku' />

    </div>
  )
};

export default TopPane;
