// let nextId = 1;
export const addProduct = (text, price) => {
    return {
        type: 'add',
        id: Date.now(),
        text: text,
        price: price,
        count: 1
    }
}

export const countProduct = (count) => {
    return {
        type: 'count',
        count: count
    }
}

export const deleteProduct = (id) => {
    return {
        type: 'delete',
        id: id
    }
}