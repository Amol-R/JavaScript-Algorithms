let promobj = new Promise((resolve,reject)=>{
    if(1<2){
      resolve(`promise resolved`)
    }else{
      reject(`got some error`)
    }
    })
    
    promobj.then((rev)=>{
      console.log(rev)
    }).catch((err)=>{
      console.log(err)
    })