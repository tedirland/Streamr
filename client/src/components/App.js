import React from 'react'
import { Router, Route } from 'react-router-dom'
import StreamList from '../components/streams/StreamList'
import StreamDelete from '../components/streams/StreamDelete'
import StreamEdit from '../components/streams/StreamEdit'
import StreamCreate from '../components/streams/StreamCreate'
import StreamShow from '../components/streams/StreamShow'
import Header from './Header'
import history from '../history'

const App = () => {
  return (
    <div className='ui container'>
      <Router history={history}>
        <div>
          <Header />
          <Route path='/' exact component={StreamList} />
          <Route path='/streams/new' exact component={StreamCreate} />
          <Route path='/streams/edit/:id' exact component={StreamEdit} />
          <Route path='/streams/delete/:id' exact component={StreamDelete} />
          <Route path='/streams/show' exact component={StreamShow} />
        </div>
      </Router>
    </div>
  )
}

export default App
