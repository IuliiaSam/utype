const choosenLevelAction = (e, data) => ({
  type: 'SELECTED',
  data: data.find(el => el.id == e.target.dataset.id)
});
export default choosenLevelAction;
