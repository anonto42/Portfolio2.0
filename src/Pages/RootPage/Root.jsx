import React from 'react'
import Naveber from './../../Components/Naveber/Naveber';
import Footer from '../../Components/Footer/Footer';
import Skills from '../Skiles/Skills';

const Root = (props) => {
  return (
    <div>
        <Naveber/>
            {props.children}
        <Footer/>
    </div>
  )
}

export default Root