import React,{ Component} from 'react';
import axios from 'axios';
class PostForm extends Component{
    constructor(props) {
        super(props) 
            this.state={
                title:'',
                body:''
            }
        
    }
    changeHandler=e=>{
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler=e=>{
        e.preventDefault()
        console.log(this.state)
        this.setState({[e.target.name]: e.target.value})
        axios.post('http://127.0.0.1:8000/api/posts?json=true',this.state)
        .then(response=>{
            console.log(response)
        this.props.action();
        })
        .catch(error=>{
            console.log(error)
        })
       
    }
 
    render(){
        const { title,body } =this.state
        return (
            <div className="col-md-8 offset-md-2"><br/><br/><br/><br/>

            <form onSubmit={this.submitHandler}>
 
 <br/><br/><div className="card">
 
 <div className="card-header bg-dark">
 <h1 className="text-white text-center">  Create Post </h1>
 </div><br/>

 <label> Title: </label>
 <input type="text" name="title" placeholder="Enter title" value={title} onChange={this.changeHandler}/> <br/>

 <label> Body: </label>
 <input type="text" name="body" placeholder="Enter body" value={body} onChange={this.changeHandler}/> <br/>

 <button class="btn btn-success" type="submit" name="done"> Submit </button><br/>

 </div>
 </form>
 
</div>


        )
    }
}
export default PostForm;