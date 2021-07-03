import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../../pages/Home/Home'
import SoulBlog from '../../pages/SoulBolg/SoulBlog'
import NewBlog from '../../pages/NewBlog/NewBlog'

function App(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/sandra-blog' component={Home}/>
                    <Route exact path='/sandra-blog/soul-blog' component={SoulBlog}/>
                    <Route exact path='/sandra-blog/new-blog' component={NewBlog}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App