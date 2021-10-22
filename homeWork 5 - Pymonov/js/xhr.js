const requestURL = './json/products.json';
let responce;

function sendRequest(method, url, body = null) {
  const headers = {
    'Content-Type':'application/json'
  }
  return fetch(url, {
    method: method,
    // body: JSON.stringify(body),
    headers:headers
  }).then(responce => {
    if(responce.ok){
      return responce.json();
    }
    return responce.json().then( error=>{
      const e = new Error('somthing go wrong');
      e.data = error;
      throw e;
    })
  })
}
