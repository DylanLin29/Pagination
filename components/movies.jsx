import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './moviesTable';
import _ from 'lodash';

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        selectGenre: 'All Genres',
        sortColumn: {name: 'title', order: 'asc'}
    }

    componentDidMount() {
        // [{_id: '', name:'All Genres'},...getGenres()] clones everything in getGenres() and add {_id: '', name: 'All Genres'} at the begining
        this.setState({ movies: getMovies(), genres: [{_id: '', name:'All Genres'},...getGenres()] });
    }

    handleDelete = (_id) => {
        const movies = this.state.movies.filter(m => _id !== m._id);
        this.setState({ movies: movies});
    }

    handleLike = (movie) => {
        let movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    }

    handleSort = (sortColumn) => {
        this.setState({ sortColumn });
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    }

    handleSelectGenre = (genre) => {
        this.setState({ selectGenre: genre, currentPage: 1 });
    }

    getMovies = () => {
        const moviesSameGenre = this.state.movies
            .filter(movie => (
                movie.genre.name === this.state.selectGenre || 
                this.state.selectGenre === 'All Genres'
            ));
        const sortedMovies = _.orderBy(moviesSameGenre, [this.state.sortColumn.name], [this.state.sortColumn.order]);
        const movies = paginate(sortedMovies, this.state.currentPage, this.state.pageSize);
        return {movies, moviesSameGenre};
    }

    render() { 
        const { movies, moviesSameGenre} = this.getMovies();
        return (
            <div>
                {movies.length === 0 ? 
                    <p>There are no movies in the database</p> : 
                    <>
                        <div className="row">
                            <div className="col-2">
                                <ListGroup 
                                    handleSelectItem={this.handleSelectGenre}
                                    selectItem={this.state.selectGenre}
                                    items={this.state.genres}
                                />
                            </div>
                            <div className="col">
                                <p>Showing {moviesSameGenre.length} movies in the database</p>
                                <MoviesTable 
                                    movies={movies}
                                    onLikeClick={this.handleLike}
                                    onDeleteClick={this.handleDelete}
                                    onSort={this.handleSort}
                                    sortColumn={this.state.sortColumn}
                                />
                                <Pagination 
                                    itemCount={moviesSameGenre.length} 
                                    pageSize={this.state.pageSize}
                                    onPageChange={this.handlePageChange}
                                    currentPage={this.state.currentPage}
                                />
                            </div>
                        </div>
                    </>
                }
            </div>
        );
    }
}
 
export default Movies;