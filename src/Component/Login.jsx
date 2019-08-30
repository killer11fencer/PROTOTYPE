import React, {Component} from 'react'


 class Login extends Component {
     constructor() {
         super();
         this.state = {
             username: '',
             password: '',
             
         }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
     }
     render() {
         return(
             <div>
                <section>
                    <input name='username'/>
                    <input name='password' type='password'/>
                </section>
             </div>
         )
     }
 }
 export default Login