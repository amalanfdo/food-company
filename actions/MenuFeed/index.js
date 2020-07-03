export const MenuListOperation = {
    INCREMENT : 'INCREMENT',
    DECREMENT : 'DECREMENT'
}

export const handleIncrement = id => ({
    type: MenuListOperation.INCREMENT,
    id: id
})

export const handleDecrement = id => ({
    type: MenuListOperation.DECREMENT,
    ...id
})