import React from 'react'
import {Link,Route,BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import Video from './components/video'
function App(props){
    return(
      <div>
          <BrowserRouter>
            
            <Link to='/'></Link>

            <Route path='/' component={Home} exact={true}/>
            <Route path='/video/:id' component={Video} />
          
          </BrowserRouter>
      </div>
        )
    
}




export default App