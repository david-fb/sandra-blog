import React from 'react'
import {Route, Switch, HashRouter} from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../../pages/Home/Home'
import SoulBlog from '../../pages/SoulBolg/SoulBlog'
import HablemosSoul from '../../pages/HablemosSoul/HablemosSoul'

function App(){
    return(
        <HashRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/soul-blog' component={SoulBlog}/>
                    <Route exact path='/hablemos-soul' component={HablemosSoul}/>
                </Switch>
            </Layout>
        </HashRouter>
    )
}

export default App