import React , {Component} from 'react';


class SignUp extends Component{
    state={
        userDetailFields: ['Name','Surname','Age','Email','Password','Confirm Password'],
        userDetails: []
    }
    handleSubmit=(e)=>{
        console.log(e)
        e.preventDefault()
        const fieldIds = this.state.userDetailFields.map(element =>{
            return 'user-'+element.charAt(0).toLowerCase() + element.slice(1).replace(" ","")
        })

        const userDetails = []
        for(var i=0; i<fieldIds.length; i++){
            const element = document.getElementsByTagName("form")[0].getElementsByTagName('input')[i]
            const fieldPosition=fieldIds.indexOf(element.id)
            userDetails[fieldPosition]=element.value
        }

        if (userDetails.slice(-2)[0]===userDetails.slice(-2)[1]){
            if(!userDetails.includes("")){
                this.setState({
                    userDetails: userDetails
                })
                alert("Success")
            }else{
                alert("Please fill in all fields")
            } 
        } else {
            alert("Passwords do not match")
        }
    }

    goToNextField=(e)=>{
        if(e.key==="Enter"){
            console.log(e.target.value)
            const userIds = this.state.userDetailFields.map(element => {
                return 'user-'+element.charAt(0).toLowerCase() + element.slice(1).replace(" ","")
            });
            const nextField = userIds.indexOf(e.target.id)+1
            if(nextField!==userIds.length){
                document.getElementById(userIds[nextField]).focus()
            }
        }

    }
 
    render(){
        return (
            <div className="signup-container">
                <form className="signup-form">
                    
                    <label htmlFor='name'>Name<br/></label>
                    <input type='text' id='user-name' key='0' onKeyPress={this.goToNextField} required/>
                    <br/><br/>
                    
                    <label htmlFor='Surname'>Surname<br/></label>
                    <input type='text' id='user-surname' key='1' onKeyPress={this.goToNextField} required/>
                    <br/><br/>
                    
                    <label htmlFor='age'>Age<br/></label>
                    <input type='number' min="0" id='user-age' key='2' onKeyPress={this.goToNextField} required/>
                    <br/><br/>

                    <label htmlFor='email'>Email<br/></label>
                    <input type='email' id='user-email' key='3' onKeyPress={this.goToNextField} required/>
                    <br/><br/>

                    <label htmlFor='password'>Password<br/></label>
                    <input type='password' id='user-password' key='4' onKeyPress={this.goToNextField} required/>
                    <br/><br/>

                    <label htmlFor='ConfirmPassword'>Confirm Password<br/></label>
                    <input type='password' id='user-confirmPassword' key='6' onKeyPress={this.goToNextField} required/>
                    <br/><br/>

                    <input type='button' value='Submit' onClick={this.handleSubmit}/>
                </form>
            </div>

        )
    }
}

export default SignUp