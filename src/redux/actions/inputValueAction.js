export const readInputValue = e => ({
    type: `${e.target.name}`,
    [e.target.name]: e.target.value,
})