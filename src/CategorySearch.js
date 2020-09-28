import React from 'react';
import './styles/main.scss'

function renderImage(items){
    const image = items.map(item => item.image)
    const title = items.map(item => item.title)
    const number = items.map(item => item.number)

    return (
      <ul className='ul'>
      {
        image.map((image, index)=> {
          return (
            <div className='itemBox'>
              <img className='img' src={image}/>
              <div className='textBox' style={{textAlign: 'center', paddingLeft: '0rem'}}>
                <h1 className='h1' > {title[index]}</h1>
                <h3 className='h3'> {number[index]}</h3>
              </div>
            </div>
            )
        })
      }
      </ul>
    )
}

const items = [
  {title: 'メイドインジャパン', image: require('./img/madeinj.jpg'), number: '1,024'},
  {title: '家電', image:  require('./img/kaden.jpg'), number: '504'},
  {title: 'アニメグッズ', image:  require('./img/anime.jpg'), number: '5,111'},
  {title: '健康食品', image:  require('./img/sapuri.jpg'), number: '34'},
  {title: '食品', image:  require('./img/ramen.jpg'), number: '524'},
  {title: 'コスメ', image:  require('./img/cosme.jpg'), number: '12,424'}
]

const CategorySearch = () => {
  return (
    <div className='Contentitems1'>
      {renderImage(items)}
    </div>
  )
}

export default CategorySearch;
