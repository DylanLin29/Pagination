import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = ({ sortColumn, columns, movies, onSort }) => {
    return ( 
        <table className="table" >
        <TableHeader
            onSort={onSort}
            sortColumn={sortColumn}
            columns={columns}
        />
        <TableBody
            data={movies}
            columns={columns} 
        />
    </table>
    );
}
 
export default Table;