function speedprogression (state = [],action){
switch (action.type){
case "SPEED":
let result= {
    historyDate: {
        labels: [1,2,3,4,5,6,7,8,9,10],
        datasets: [
          {
            label: "Rate",
            data: [60,65,70,75,85,90],
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
return result;
default: return state;
}}

export default speedprogression;


            // chartData: {
                //     labels: [сюда пишем вводятся данные по оси х],
                //     datasets:{
                //         label:"Population",
                //         data:[ [сюда пишем вводятся данные по оси у]
                //             617594,
                //             181045,
                //             153060,
                //             106519,
                //             105162,
                //             95072,
                //         ],
                //        backgroundcolor: [
                //          'rgba(255,99,132,0.6)', 
                //          'rgba(54,162,235,0.6)', 
                //          'rgba(255,206,86,0.6)', 
                //          'rgba(255,206,86,0.6)', 
                //          'rgba(255,206,86,0.6)', 
                //          'rgba(255,206,86,0.6)', 
                //        ],
                //     },
                // }
            // }