 import React , {Component} from 'react';
 

 class Counter extends Component{
      constructor(props){
           super(props)
            this.state = {
               count :0
            }
        console.log("constructor")
         }

          increment = () =>{
             this.setState({
                count :this.state.count+1
             })
          }

            componentWillMount(){
                console.log("componentsDidmount");
                
                }

        componentDidMount(){
            console.log("componentsDidmount");
        }

        shouldComponentUpdate(){
            if(this.state.count > 20){
                return false
            }else{
                return true
            }
        }


     render(){
        console.log("render")
         return(
           <div>
             <h1>{ this.state.count}</h1>
             <button onClick = { this.increment}>increment</button>
            </div>
           
            )
     }
 } 

 export default Counter;
