import React from 'react';

class Profileclass extends React.Component{
    constructor(props){
        console.log("child constructor");
        super(props);
    }
    componentDidMount(){
        console.log("child componentDidMount");
    }
    render(){
        console.log("child render");
return(
    <>
<h1>Profile Child</h1>
    </>
)
    }
}

export default Profileclass;