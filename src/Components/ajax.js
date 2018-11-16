import React, {Component} from 'react';
import $ from 'jquery'

class Ajax extends Component{
   constructor(props){
       super(props)
         this.state = {
             users:[]
         }     
   };

    componentDidMount(){
        $.ajax({
            url:'https://jsonplaceholder.typicode.com/users',
            success:(data) =>{
                //console.log(data)
                this.setState({
                users:data
            })
            } 
        })


    }


    

    render(){
        return(
            <div>
            <p>{this.state.users.map((user) =>{
                return <div>
                    <li key ={user.id}>{user.name}</li>
                    </div>
            })}</p>
            </div>
        )
    }
}

export default Ajax;