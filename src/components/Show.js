import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';  
import EditPost from './EditPost';
import toast, { Toaster } from 'react-hot-toast';

import { BrowserRouter, Route, Switch, Router, Link,Redirect } from "react-router-dom";
let notify = () => toast.success('Item Deleted Succesfully');
class Show extends Component{
    constructor(props){
        super(props)
        this.state = {
            activetab:'tab1'
       }
   }

   deleteRow(id, e){
      axios.delete(`http://127.0.0.1:8000/api/posts/${id}?json=true`)
        .then(res => {
          console.log(res);
          console.log(res.data);
    
          const posts = this.state.posts.filter(item => item.id !== id);
          this.setState({ posts });
        })
    
    }
   edit(){
       this.setState({
           activetab:'edit'
       })
   
    }
    render(){
        return (
            <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-4">
                        <div className="well" >
                               <h1> <b>{this.props.title} </b></h1>
                               <h4>{this.props.body}</h4>
                               <div class="col-3  float-left">
            
      <Button variant="contained" color="primary" className="btn btn-primary"  title={this.props.title} body={this.props.body} id={this.props.id} onClick={()=>this.edit()}>Edit</Button>
      
             </div>
             <div class="col-3  float-right">            
            <Button variant="contained" color="secondary" className="btn btn-danger" onClick={(e) => this.deleteRow(this.props.id, e) , notify}>
Delete<Toaster /></Button>
            </div>
         
                               
                               <br/>
                        </div>
                       
                        <br/>
                </div>
            </div>
    </div>
        )


        
    }
}
export default Show;




