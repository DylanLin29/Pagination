import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Movies extends Component {
    state = {
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1
    }

    handleClick = (_id) => {
        const movies = this.state.movies.filter(m => _id !== m._id);
        this.setState({ movies: movies});
    }

    handleLikeClick = (index) => {
        let movies = [...this.state.movies];
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    }

    render() { 
        const movies = paginate(this.state.movies, this.state.currentPage, this.state.pageSize);
        return (
            <div>
                {this.state.movies.length === 0 ? 
                    <p>There are no movies in the database</p> : 
                    <>
                        <p>Showing {this.state.movies.length} movies in the database</p>
                        <Table >
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Genre</th>
                                    <th>Stock</th>
                                    <th>Rate</th>
                                    <th />
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                {movies.map(({ title, genre, numberInStock, dailyRentalRate, _id, liked}, index) => (
                                    <tr key={_id}>
                                        <th>{title}</th>
                                        <th>{genre.name}</th>
                                        <th>{numberInStock}</th>
                                        <th>{dailyRentalRate}</th>
                                        <th><Like liked={liked} onClick={() => this.handleLikeClick(index)}/></th>
                                        <th>
                                            <Button variant="danger" onClick={() => this.handleClick(_id)}>
                                                Delete
                                            </Button>
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <Pagination 
                            itemCount={this.state.movies.length} 
                            pageSize={this.state.pageSize}
                            onPageChange={this.handlePageChange}
                            currentPage={this.state.currentPage}
                        />
                    </>
                }
            </div>
        );
    }
}
 
export default Movies;