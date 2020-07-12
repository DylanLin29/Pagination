import { Component } from 'react';

class TableHeader extends Component {

    raiseSort = name => {
        const sortColumn = {...this.props.sortColumn};
        const { onSort } = this.props;
        if (sortColumn.name === name) {
            sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
        } else {
            sortColumn.name = name;
            sortColumn.order = 'asc';
        }
        return onSort(sortColumn);
    }

    renderSortIcon = (column) => {
        // no icons display if not selected
        if (column.name !== this.props.sortColumn.name ) {
            return null; 
        } 
        if (this.props.sortColumn.order === 'asc') {
            return <i className="fa fa-sort-asc" ></i>;
        }
        if (this.props.sortColumn.order === 'desc') {
            return <i className="fa fa-sort-desc" ></i>;
        }
    }

    render() {
        const { columns } = this.props;
        return (
            <thead>
                <tr>
                {columns.map(column => 
                    <th 
                        onClick={() => this.raiseSort(column.name)}
                        key={column.label || column.key}
                        style={{cursor: 'pointer'}}
                    >{column.label} {this.renderSortIcon(column)}</th>
                    )}
                </tr>
            </thead>
        );
    }
}

export default TableHeader;