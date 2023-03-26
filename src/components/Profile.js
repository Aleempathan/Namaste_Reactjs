import React from "react";
import Profileclass from "./profileclass";

class Profile extends React.Component {
    constructor(props){
        // console.log("constructor");
        super(props);
        this.state={
            username :'Aleem Nasiyathulla',
            email:'aleem@gmail.com',
            count:0,
            userInfo:{}
        }
    }

    componentDidMount(){
     this.getUserInfo()
    }

    async getUserInfo(){
        let data = await fetch("https://api.github.com/users/Aleempathan")
        data = await data.json();
        // console.log(data)
        this.setState({userInfo: data})
    }
    componentWillUnmount(){
        clearInterval( this.userinter)
    }
    render(){
        // console.log('render')
        return (
            <>
            <h1 className="profile">Profile Component</h1>
            <h3>Name:{this.props.name}</h3>
            <h3>XYZ:{this.props.xyz}</h3>
            {/* <Profileclass/> */}
            <p>{this.state.username}</p>
            {this.state.email}
            <h4>{this.state.count}</h4>

            <button onClick={()=>{this.setState({count:this.state.count+1})}}>Increse Count</button>

            <div className="restaurants_card">
                {
                
                     <div>
                         <img src={this.state.userInfo.avatar_url} alt="" />
                         { this.state.userInfo.name}
                     </div>
                }
            </div>
            </>
        )
        
        
    }

}

export default Profile