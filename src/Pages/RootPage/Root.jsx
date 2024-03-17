import React from 'react'
import Naveber from './../../Components/Naveber/Naveber';
import Footer from '../../Components/Footer/Footer';

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