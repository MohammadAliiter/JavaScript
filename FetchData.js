
    function fetchdata(){
        return  new Promise((resolve)=>{
            setTimeout(()=>{
                 resolve("data fetched");
            },2000)
        })
    }

 async function datafetchExample(){
       try{

        console.log("data fecthing...................")
        let result = await fetchdata();
        console.log(result);
       }

       catch(errore){
        console.log("Errore in fetchin data" , errore);
       }
}

datafetchExample();