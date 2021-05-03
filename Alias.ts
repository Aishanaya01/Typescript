type StringOrNum = String | Number;
type ObjWithName = {name:string , uid:StringOrNum};

const logDetails = (uid:StringOrNum , item:string)=>{
    console.log('${item} has a uid of ${uid}');
}
const greet = (user:objWithName)=>{
    console.log('${user.name}says hello');
}
const greetAgain = (user:objWithName)=>{
    console.log('${user.name}says hello');
}