import React, { Component } from 'react'
import Like from './common/like';
import {getMovies} from "./services/fakeMovieService";
class Movies extends Component{
    state = {
        movies: getMovies()
    };

    handleDelete = (movie) => {
        const movies = this.state.movies.filter((m) => m._id !== movie._id);
        //if key and value are same you can just write the key
        this.setState({movies});
    }
    handleLike =(movie) => {
        console.log(movie);
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index].isLiked = !movies[index].isLiked;
        this.setState({movies});
    }

render(){
    const {length:movieCount }  = this.state.movies;

    if(movieCount===0) return <p>There is no record in the database</p>;

    return ( 
        <React.Fragment>
                <p>Showing {movieCount} movies in the database.</p>
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(movie =>(
                        <tr key = {movie._id}>
                            <th scope="row">{movie.title}</th>
                            <th scope="row">{movie.genre.name}</th>
                            <th scope="row">{movie.numberInStock}</th>
                            <th scope="row">{movie.dailyRentalRate}</th>
                            <th scope="row" >
                                <Like onClick={() => this.handleLike(movie)} liked={movie.isLiked}/>
                            </th>
                            <th scope="row"><button className="btn btn-danger" onClick={() => this.handleDelete(movie)}>Delete</button></th>
                        </tr>
                    ))}
                </tbody>
                </table>
        </React.Fragment>
    )
    }
}
export default Movies;
