import React from 'react'
import { Route } from 'react-router-dom'
import { Home } from './components/home'
import { Movies } from './components/movies'
import { Series } from './components/series'
import { EntriesProvider } from '../entries.context'

const App = () => {
  return (
    <>
      <EntriesProvider>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={App} />
        <Route path='/series' component={Series} />
        <Route path='/movies' component={Movies} />
      </EntriesProvider>
    </>
  )
}

export default App
