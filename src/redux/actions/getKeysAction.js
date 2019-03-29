export const getKeys = () => ({
  type: 'GETKEYS',
  keys: Array.from(document.querySelectorAll('.key')).map(el =>
    el.className.split(' ')[1].substring(4)
  )
});
