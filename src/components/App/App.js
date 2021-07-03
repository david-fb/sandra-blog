import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../../pages/Home/Home'
import SoulBlog from '../../pages/SoulBolg/SoulBlog'

function App(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/soul-blog' component={SoulBlog}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App