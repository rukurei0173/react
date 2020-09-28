import React, { useState } from 'react';
import './styles/main.scss'

function renderImage(items, state, styleNumber){
    const title = items.map(item => item.title).slice(0, state)
    const image = items.map(item => item.image).slice(0, state)
    const text  = items.map(item => item.text).slice(0, state)
    const price = items.map(item => item.price).slice(0, state)

    return (
      <div class='wrap'>
      {styleNumber===2 ? <p class='right-arrow'>◀︎</p> : ''}
      <ul className='ul'>
      {
        image.map((image, index)=> {
          return (
            <div className='itemBox' id='scroll'>
              <img className='img' src={image}/>
              <div className='textBox'>
                <h1 className='h1'> {title[index]}</h1>
                <h2 className='lanktext'> {text[index]} </h2>
                <h3 className='h3'> {price[index]}</h3>
              </div>
            </div>
            )
        })
      }
      </ul>
      {styleNumber===2 ? <p class='left-arrow'>▶︎</p> : ''}
    </div>
    )
}

const items = [
  {title: '寿司フィギュア', image: require('./img/susi.jpg'), text: 'TEXTTEXTTEXTTTTTTTT', price: '￥2500'},
  {title: 'ラーメン', image:  require('./img/ramen.jpg'), text: 'TEXTTEXTTTTTTT', price: '￥2500'},
  {title: '地ビール', image:  require('./img/biru.jpg'), text: 'TEXEXTETTTTTTT', price: '￥2500'},
  {title: 'コーヒー', image:  require('./img/coffee.jpg'), text: 'TEXTTEXTTTTTT', price: '￥2500'},
  {title: 'メロン', image:  require('./img/meron.jpg'), text: 'TEXTTETTTT', price: '￥2500'},
  {title: 'コスメ', image:  require('./img/cosme.jpg'), text: 'TEXTTETTTT', price: '￥2500'},
  {title: 'コスメ', image:  require('./img/cosme.jpg'), text: 'TEXTTETTTT', price: '￥2500'}

]


const Lank = (props) => {
  const [styleNumber, setstyleNumber] = useState(props.pattern);
  const [number, setNumber] = useState(4);

  const loadList = () =>  {
    setNumber(number => number + 4)
  }

    return (
      <div className={'Contentitems'+styleNumber}>
        {renderImage(items, number, styleNumber)}
        {
          items.length > number
          ? <div className='button' onClick={loadList}>more</div>
          : ''
        }
      </div>
    )
}

export default Lank;
