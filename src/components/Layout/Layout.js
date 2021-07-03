import React from 'react'
import Menu from '../Menu/Menu'
import Footer from '../../components/Footer/Footer'

export default function Layout(props){
    return(
        <React.Fragment>
            <Menu />
            {props.children}
            <Footer />
        </React.Fragment>
    )
}