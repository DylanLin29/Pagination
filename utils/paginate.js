import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    // _(items) convert the items to lodash format
    // .value() convert the items back to the original format
    return _(items).slice(startIndex).take(pageSize).value();
    // _.slice(items, startIndex); // slice the array of items starting from the index startIndex
}