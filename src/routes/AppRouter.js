import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import Nav from '../components/Nav'
import Home from '../components/Home'
import About from '../components/About'
import SearchApi from '../components/SearchApi'
import NotFound from '../components/NotFound'
import SearchBooks from '../components/SearchBooks'

const AppRouter = () => {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/search' component={SearchApi}/>
                <Route exact path='/searchbooks' component={SearchBooks}/>
                <Route path='/search/:id' />
                <Route component={NotFound}/>
            </Switch>
        </Router>
    )
}

export default AppRouter;