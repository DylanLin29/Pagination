import _ from 'lodash';
// proptypes are used to validate the type of passed in props
// More info https://reactjs.org/docs/typechecking-with-proptypes.html
import PropTypes from 'prop-types'; 

const Pagination = ({ itemCount, pageSize, onPageChange, currentPage }) => {

    const pagesCount = itemCount / pageSize;
    const pages = _.range(1, pagesCount+1);
    if (pages.length > 1) {
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {pages.map(page => (
                        <li className={page === currentPage ? "page-item active" : "page-item"} key={page}>
                            <a 
                                className="page-link" 
                                href="#" 
                                style={{color: "black"}} 
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    } 
    return null;
}

Pagination.propTypes = {
    // indicates that itemsCount is number is required
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired, 
    onPageChange: PropTypes.func.isRequired, 
    currentPage: PropTypes.number.isRequired
};

export default Pagination;