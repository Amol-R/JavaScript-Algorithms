let promobj = new Promise((resolve,reject)=>{
    if(1<2){
      resolve(`promise resolved`)
    }else{
      reject(`got some error`)
    }
    })

    async function getdata() {
        try {
            let res = await promobj
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    getdata()