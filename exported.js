// import students from './index.js'
// import doesn't work in node 
// so we use this method
const exported=require('./index');
console.log(exported.students);
var filter=exported.workers;
var filtered=filter.filter(fil=>{
    fil.match((f)=>{
        return f;
    })
})
console.log(filtered)