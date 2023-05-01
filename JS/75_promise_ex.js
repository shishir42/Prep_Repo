function one(){
    const promise_11 = new Promise((resolve, rejected)=>{
      setTimeout(() =>{
        resolve(10);
      }, 0);
    });
    return promise_11;  
  }
  
  function two(){
    const promise_22 = new Promise((resolve, rejected)=>{
      setTimeout(() =>{
        resolve(20);
      }, 0);
    });
    return promise_22
  }
  
  function three(){
    const promise_33 = new Promise((resolve, rejected)=>{
      setTimeout(() =>{
        resolve(30);
      }, 0);
    });
  
    return promise_33;
  }
  
  async function test(){
    try{
      const res1 = await one();
      const res2 = await two();
      const res3 = await three();
      const output = (res1+res2+res3)
      console.log('response ', output);
    }catch(e){
  
    }
  }
  
  test();