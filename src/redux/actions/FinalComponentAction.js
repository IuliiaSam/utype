export const finalAction =(arr1,arr2)=>({
        type:'FINALACTION',
        value:arr1.length*100,
        acuracy:arr1.length/arr2.length*100,
})