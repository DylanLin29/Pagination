import _ from 'lodash';

const Pagination = ({ itemCount, pageSize, onPageChange, currentPage }) => {
    console.log(currentPage);

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

export default Pagination;