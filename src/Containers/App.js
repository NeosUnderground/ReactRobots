import React, {Component} from 'react';
import {connect} from "react-redux";
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import {setSearchField, requestRobots} from '../Actions.js';

//recieves a state and rerutns an object which contains the searchdield state from the reducer and passes it as a property to the app.
const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

//triggers the actoin, dispatch sends the actions into the reducer. Receives an event (its a DOM event) which is dispatches (or sends) the action (setSearchField) so the reducers are aware of it. This is returned as an object.
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
 }
}
//Defines the class APP
class App extends Component {

//Fetches the API containing a list of users that is then assigned to the robots state array.
componentDidMount(){
  this.props.onRequestRobots();
}

//renders the components and compares the values entered in the searchbox with the names of the robots. Returns the matches via Cardlist compoenent.
  render(){
    const {searchField, onSearchChange, robots, isPending} = this.props;
    const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

//check to see if loading
    return isPending ?
      <h1>Loading..</h1>
    :(
      <div className='tc'>
        <h1 className='f1 ma1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <CardList robots={filteredRobots}/>
        </Scroll>
      </div>
      );
    }
}
//connect is the function from the react-redux. This is a higher order function. This is the syntax. Connect accepts two parameters which is the standard. This allows APP to connect to the redux store.
export default connect(mapStateToProps, mapDispatchToProps)(App);
