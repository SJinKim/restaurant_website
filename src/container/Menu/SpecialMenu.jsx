import React from 'react'

import { images, data } from '../../constants'
import { SubHeading, MenuItem } from '../../components'

import './SpecialMenu.css'

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu that fits you palatte' />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu-menu__heading'>Wine & Beer</p>
        <div className='app__specialMenu-menu__items'>
          {data.wines.map((item, index) => (
            <MenuItem key={item.title + index} title={item.title} tags={item.tags} price={item.price} />
          ))}
        </div>
      </div>

      <div className='app__specialMenu-menu__img'>
        <img src={images.menu} alt='menu' />
      </div>

      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu-menu__heading'>Cocktails</p>
        <div className='app__specialMenu-menu__items'>
          {data.cocktails.map((item, index) => (
            <MenuItem key={item.title + index} title={item.title} tags={item.tags} price={item.price} />
          ))}
        </div>
      </div>
    </div>

    <div>
      <button type='button' className='custom__button'>
        View More
      </button>
    </div>
  </div>
)

export default SpecialMenu
