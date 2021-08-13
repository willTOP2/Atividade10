        const axios = require('axios').default;

    (async ()=>{

        try{
        const res = await axios.post('http://localhost:3000/books', {
            ID: 3,
            name: 'My Boook',
            author: 'Me and only me'
        }) 
        
        console.log(res.data);

        const resp = await  axios.post('http://localhost:3000/books', {
            ID: 4,
            name: 'Java',
            author: 'Java 9'
        })
        console.log(resp.data);

        const res5 = await  axios.get('http://localhost:3000/logs')
        console.log(res5.data);
     
        const res10 = await  axios.get('http://localhost:3000/books')
        console.log(res10.data);

       const res2 = await  axios.get('http://localhost:3000/books/'+res10[0].params.ID)
       console.log(res2.data);

        const res3 =  await  axios.post('http://localhost:3000/books/'+res2[1].params.ID)
        console.log(res3.data);
      

         }catch(err) {
        console.log(err.data);

    }}) ()


