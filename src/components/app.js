import React from "react";
import youtube from "../api/youtube";
import SearchBar from "./searchbar";
import VideoList from "./videolist";
class App extends React.Component {
  state={videos:[]};
  onTermSubmit= async term=>{
 const response= await youtube.get('/search',{params:{
    q:term
  }})
  this.setState({videos:response.data.items})
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar  onFormSubmits={this.onTermSubmit}/>
      
      <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}
export default App;
