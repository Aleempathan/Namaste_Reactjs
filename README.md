# `Learn React With Aleem 👩🏻‍💻 Series`
   Documenting my learning journey of [Namaste React Live Course](https://learn.namastedev.com/) conducted by Akshay Saini

## Class Summary `Chapter - 08 Let's get Classy` (21/01/2023)
  
  Chapter-08 was all about understanding the creating class-based component, it's different lifecycle methods, whats happening under the hood. It was an amazing session as we can easily grasp the concept since we already know how component are rendered in react using functional components. We even discussed about various possible interview questions. 
 
Definitely this chapter deserves two lines :

Two lines about this chapter : 

`There are 2 types of data in a component, one is coming from parent through props and accessed using this.props and another is local state within the component that is created in constructor() and accessed using this.state and modified using this.setState()`


`Whenever a component is called, first constructor() is called, followed by render(), if any children are present in render(), then those children's constructor & render() method is called, after which componentDidMount() of children (in order) is called before parent's componentDidMount, followed by componentDidUpdate() and componentWillUnmount of children followed by parent`


