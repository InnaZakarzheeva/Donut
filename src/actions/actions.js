let nextId = 1;
export const addProduct = (text, price) => {
    return {
        type: 'add',
        id: nextId++,
        text,
        price
    }
}

export const deleteProduct = (id) => {
    return {
        type: 'delete',
        id
    }
}