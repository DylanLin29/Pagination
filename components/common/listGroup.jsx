const ListGroup = ({ items, selectItem, handleSelectItem, textProperty, valueProperty }) => {
    return(
        <ul className="list-group">
            {
                items.map(item => 
                    <li 
                        className={selectItem === item[textProperty] ? "list-group-item active" : "list-group-item"}
                        key={item[valueProperty]}
                        onClick={() => handleSelectItem(item[textProperty])}
                    >{item[textProperty]}</li>
                )
            }
        </ul>
    );
}

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
}

export default ListGroup;