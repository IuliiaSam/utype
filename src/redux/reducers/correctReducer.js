function correctinput (state = [],action){
    switch (action.type){
    case "CORRECT":
    let obj= {
        historyDate: {
            labels: [1,2,3,4,5,6,7,8,9,10],
            datasets: [
              {
                label: "Rate",
                data: [5,15,25,5,4,6,15,3],
                fill: true,
                pointRadius: 3,
                pointHoverRadius: 15,
                pointBorderColor: "limegreen",
                pointBackgroundColor: "limegreen",
                borderColor: "limegreen",
                borderWidth: 2,
                lineTension: 0.3
              }
            ]
          }
    }
    return obj;
    
    default: return state;
    
    
    }}
    export default correctinput;