let nextId = 1;
export const addProduct = (text, price) => {
    return {
        type: 'add',
        id: nextId++,
        count: 1,
        text,
        price
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
        id
    }
}