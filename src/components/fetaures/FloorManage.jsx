import React from 'react'
import { FLOOR_LIST } from '../../utils/constants'
import { FloorList } from '../minicomponents/atom'

const FloorManage = () => {

    const FLOOR_TEXT = ["Manage Floors","Edit"]


  return (
    <div className='floor_manage_parent'>
        <div className='floor_head'>
            <div className='floor-title-head'>{FLOOR_TEXT[0]} </div>
            <div className='floor-title-head'>{FLOOR_TEXT[1]} </div>
        </div>
        <div className='floor-body'>
           <div>
                <div className='add-floor'></div>
                <div className="floor-title">Add Floor</div>
           </div>
           <FloorList data={FLOOR_LIST}/>
        </div>
    </div>
  )
}

export default FloorManage