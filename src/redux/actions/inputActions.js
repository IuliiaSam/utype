export const inputData = ({target}) => ({
  type: target.name,
  name: target.name,
  value: target.value,
});

export const clearInputs = () => ({
  type: 'CLEARINPUTS',
})