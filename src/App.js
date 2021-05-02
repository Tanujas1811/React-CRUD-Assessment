import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import React, {Component} from 'react'
import Main1 from './components/Main1'
import Posts from './components/Posts'
import PostForm from './components/PostForm'
class App extends Component{
  constructor(props){
      super(props)
      this.state={
          activetab:'tab1'
      }
  }
  tab1=()=>{
      console.log('tab1')
      this.setState({
          activetab:'tab1'
      })
  }
  tab2(){
      console.log('tab2')
      this.setState({
         activetab: 'tab2'
      })
  }
  tab3(){
      console.log('tab3')
      this.setState({
         activetab:'tab3'
      })
  }

render() {
  return (
    
     <Router>
           <div className="">

						 <nav className="navbar navbar-expand-lg navbar-inverse bg-warning bg-light">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-target="#main" data-toggle="collapse">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>      </div>

                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                  <ul className="nav navbar-nav mr-auto ">
                      <li className="active nav-item"><Link to={'/'} className="nav-link" onClick={this.tab1}>Home</Link></li>
                      <li className="active nav-item"><Link to={'/'} className="nav-link">About</Link></li>
                      <li className="active nav-item"><Link to={'/create'} className="nav-link" onClick={() => this.tab2()}>Create Post</Link></li>
                      <li className="active nav-item"><Link to={'/posts'} className="nav-link" onClick={() => this.tab3()}>Blogs</Link></li>
                  </ul>

                </div>
                  
             </nav>
            


           </div><br/><br/>
           <Main1 activetab={this.state.activetab} tab3={()=>this.tab3()}/>

     </Router>
    
  );
}
}

export default App;
