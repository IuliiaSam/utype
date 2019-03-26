const choosenLevelAction = (e, data)=>({
type: "SELECTED",
payload: data.find(el=> el.id == e.target.dataset.id)
})
export default choosenLevelAction;