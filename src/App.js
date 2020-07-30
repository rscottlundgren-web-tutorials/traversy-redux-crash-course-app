import React from 'react'
import Posts from './components/Posts'
import PostForm from './components/PostForm'
import { Provider } from 'react-redux'
import store from './store'
import './App.css'

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<div className='App'>
					<PostForm />
					<hr />
					<Posts />
				</div>
			</Provider>
		)
	}
}

export default App
