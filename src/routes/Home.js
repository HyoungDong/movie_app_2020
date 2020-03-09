import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";
 class Home extends React.Component{
  state ={
    isLoading:true,
    movies:[] 
  }; //state is a object, 바꿀,바뀔 데이터를 state 에 넣는다.
  getmovies = async () =>{
    const {data:{data:{movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading:false});
  }
  componentDidMount(){
    this.getmovies();
  }
  render(){
    const { isLoading,movies } = this.state;
    return (
      <section className = "container">
      {isLoading
      ?( 
      <div className = "loader">
      <span className = "loader_text">Loading... </span>
      </div>
      ) : ( 
       <div className = "movies">
       { movies.map(movie =>(
        <Movie  
        key = {movie.id} id ={movie.id} 
        title = {movie.title} year = {movie.year} 
        poster ={movie.medium_cover_image} 
        summary = {movie.summary}
        genres = {movie.genres}
        />
        ))}
       </div>)}  
      </section>
    );
  }
 }

export default Home;
