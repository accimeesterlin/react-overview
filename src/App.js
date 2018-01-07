import React from 'react'; // required
import Sadrack from './images/Sadrack.png';
import Peter from './images/Peter.png';
import Neil from './images/Neil.png';
import Sterling from './images/Sterling.png';


import "./App.css";
// JSX

// Components

// 3 types of components
  // 1 Functional component
  const Header =  () => {

    // NO State
    // NO API CALLS
    // NO FUNCTIONS

    

    // JSX
    return(
      <div>
        <h1>I am the Header</h1>
      </div>
    );
  }


  // 2 Class Components
  class App extends React.Component{

    constructor(){
      super();

      this.state = {
        username:"accimeesterlin",
        age:5,
        address:"8889000",
        school:"GT",
        fruit:[Sterling, Sadrack, Peter, Neil]
      };
    }

    componentDidMount() {
      // API CALLS
      // axios.get()
      //   .then((response) => {
      //     this.setState({data: response.data});
      //   })
      //   .catch(() => {

      //   })
    }

    change_data = () => {
      this.setState({ username: "Neil" });
    };


    get_image_info = (index) => {
      // TODO

    };


    render() {

      // JSX
      return(
        <div>
          <h1>Hello Wordl</h1>
          <p>I am learnign about React Today</p>
          <p>Username: { this.state.username } </p>
          <p>Addres:  { this.state.address }  </p>

          <p>Age: { this.state.age }</p>

          <p>School:  { this.state.school } </p>

          <ul>
            { this.state.fruit.map((el, index) => (
              <img src = {el}  key = { index } onClick = { () => this.get_image_info(index) } /> 
            )) }
          </ul>


          <button  onClick = { this.change_data }>Change Name</button> 
        </div>
      );
     
    }
  }

  // 3 Higher Order Components (advanced)

  export default App; // required








  




  


  


  


  


  


  


  


  


  


  


  


  