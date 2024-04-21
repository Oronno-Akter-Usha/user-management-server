/**
 *  1. create a post api on the server side
 *  2. client side send data via post
 *  3. set fetch method inside the fetch options (second parameter)
 *  4. option will have three things:
 *  method, headers, body
 *    headers: 'content-type':'aplication/json'
 *    don't forget to  send data by JSON.stringify in the body
 *
 *  5. On the server side: don't forget to use express.json() middleware
 *
 **/
