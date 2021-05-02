import React,{ Component} from 'react';
import axios from 'axios';
import Show from './Show';
class Posts extends Component{
    constructor(props) {
        super(props) 
            this.state={
                activeTab:'tab3',
                posts: [],
                errorMsg:''
            }
        
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/posts?json=true')
        .then(response=>{
            console.log(response)
            this.setState({posts:response.data.posts})
        })
        .catch(error=>{
            console.log(error)
            this.setState({errorMsg: 'Error retreiving data'})
        })
    }
    render(){
        const { posts,errorMsg } =this.state
        return (
            <div><br/><br/>
                <h1> Welcome to post page </h1><br/><br/>
               
                {
                    this.state.posts.length ?
                    this.state.posts.map(post=> <Show key={post.id} id={post.id} title={post.title} body={post.body}/>)
                        :
                    null
                }
                {
                    errorMsg ?<div>{errorMsg}</div>:null
                }
                
            </div>
        );
    }
}
export default Posts;