import Like from './common/like';
import { Button, Tab } from 'react-bootstrap';
import { Component } from 'react';
import Table from './common/table';


class MoviesTable extends Component {

    columns = [
        { name: 'title', label: 'Title' },
        { name: 'genre.name', label: 'Genre' },
        { name: 'numberInStock', label: 'Stock' },
        { name: 'dailyRentalRate', label: 'Rate' },
        { 
            key: 'Like', 
            // object variables can also be html tag / function
            content: movie => <Like liked={movie.liked} onClick={() => this.props.onLikeClick(movie)}/> 
        },
        { 
            key: 'Delete', 
            content: movie => <Button variant="danger" onClick={() => this.props.onDeleteClick(movie._id)}>Delete</Button> 
        }
    ];

    render () {
        const { movies, onSort, sortColumn } = this.props;
        return (
            <Table 
                movies={movies}
                sortColumn={sortColumn}
                columns={this.columns}
                onSort={onSort}
            />
        );
    }
}

export default MoviesTable;