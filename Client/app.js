const graphqlurl = 'http://localhost:9000/'

async function fetchgreeting(){
    const response  = await fetch(graphqlurl, {
        method: 'POST', 
        headers: {
            'content-type': 'application/json'
        }, 
        body: JSON.stringify({
            query:`
            query {
                greeting
            }        
            `
        })
    })

    const {data} = await response.json()
    console.log(data)
    return data;
}

fetchgreeting().then(({greeting}) => {
   const title  = document.querySelector('h1')
   title.textContent = greeting
} )