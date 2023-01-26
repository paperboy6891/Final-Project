const prod=(arr1,arr2)=>{
    let prod=null;
    let prodSecond=null;
    arr1.reduce((acc,curr)=>(prod=acc+curr));
    arr2.reduce((acc,curr)=>(prodSecond=acc+curr))
    let sum=prod+prodSecond;
    return console.log(`first array ${prod} : second is ${prodSecond} and there product is ${prodSecond/prod} sum : ${sum}`)
}
