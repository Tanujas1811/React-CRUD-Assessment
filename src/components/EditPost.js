import axios from 'axios'
import React, { Component } from 'react'

 class EditPost extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              
         }
     }

     submitUpdate(id,e){
         axios.put('http://127.0.0.1:8000/api/posts/${id}?json=true',{
             
         })

     .then(
        response =>{console.log('here')}
        
        
        ).catch(error => {
        console.log("ERROR:: ",error.response.data);
        
        });;
     }
     
    render() {
        return (
            <div>
                 <h2 className="text-center pt-5">Edit Post</h2>
                <form onSubmit={this.submitUpdate}>
              
                <div className="input-group mb-3 col-6 pt-2" style="margin-right: auto;margin-left: auto;">
            <div class="input-group-append">
            <span className="input-group-text">Title</span>
            </div><input type="text" value={this.props.title}  ></input>     
            </div>
            <div className="input-group mb-3 col-7 pt-2" style="margin-right: auto;margin-left: auto; width: 900px;">
                Body:
            <input type="textarea" value={this.props.body}  ></input>
            </div>
            <input type="submit"  >Submit</input>
           </form>

            </div>
        )
    }
}

export default EditPost