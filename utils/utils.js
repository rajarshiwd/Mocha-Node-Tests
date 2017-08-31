var add = (a,b)=>{
  return a+b;
}
var square =(x) => {
  return x*x ;
}

var asnycAdd = (a,b,callback)=>{
setTimeout(()=>{
  callback(a+b);
});

}
var asyncsquare =(a,callback)=>{
setTimeout(()=>{
  callback(a*a);
});
}

module.exports={
  add,
  square,
  asnycAdd,
  asyncsquare
};
