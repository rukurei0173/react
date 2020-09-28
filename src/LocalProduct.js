import React, { useState} from 'react';
import './styles/main.scss'
const renderImage = (items, state, styleNumber) => {
    const title = items.map(item => item.title).slice(0, state)
    const image = items.map(item => item.image).slice(0, state)
    const text = items.map(item => item.text).slice(0, state)

    return (
      <div class='wrap'>
      {styleNumber===2 ? <p class='right-arrow'>◀︎</p> : ''}
      <ul className='ul' id='scrollBox'>
      {
        image.map((image, index)=> {
          return (
            <div className='itemBox'>
              <img className='img' src={image}/>
              <div className='textBox'>
                <h1 className='h1'> {title[index]}</h1>
                <h2 className='localtext'> {text[index]}</h2>
              </div>
          </div>
            )
        })
      }
      {styleNumber===2 ?   <p class='left-arrow'>▶︎</p> : ''}
      </ul>
    </div>
    )
}

const items = [
  {title: 'フルーツの駅', image: require('./img/meron.jpg'), text: 'CSS プロパテaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'},
  {title: '日本酒', image:  require('./img/sake.jpg'), text: 'CSS プロパティの-webkit-line-clamp は、特定の条件を満たしたコンテンツを指定した行数に制限する'},
  {title: '京都', image:  require('./img/kyoto.jpg'), text: 'CSS プロパティの-webkit-line-clamp は、特定の条件を満たしたコンテンツを指定した行数に制限する'},
  {title: 'どっかの夜景', image:  require('./img/iwate.jpg'), text: 'sCSS プロパティの-webkit-line-clamp は、特定の条件を満たしたコンテンツを指定した行数に制限する'},
  {title: 'フルーツの駅', image:  require('./img/meron.jpg'), text: 'CSS プロパティの-webkit-line-clamp は、特定の条件を満たしたコンテンツを指定した行数に制限する'},
  {title: 'コスメ', image:  require('./img/cosme.jpg'), text: 'CSS プロパティの-webkit-line-clamp は、特定の条件を満たしたコンテンツを指定した行数に制限する'},
  {title: 'コスメ', image:  require('./img/cosme.jpg'), text: 'CSS プロパティの-webkit-line-clamp は、特定の条件を満たしたコンテンツを指定した行数に制限する'},
  {title: 'コスメ', image:  require('./img/cosme.jpg'), text: 'TEXTTETTTT'},
  {title: 'コスメ', image:  require('./img/cosme.jpg'), text: 'TEXTTETTTT'},
  {title: 'コスメ', image:  require('./img/cosme.jpg'), text: 'TEXTTETTTT'},
  {title: 'コスメ', image:  require('./img/cosme.jpg'), text: 'TEXTTETTTT'}
]

const LocalItem = (props) => {
  const [number, setNumber] = useState(4);
  const [styleNumber, setstyleNumber] = useState(props.pattern);

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

export default LocalItem;
