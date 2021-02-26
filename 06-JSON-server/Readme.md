# JSON - Server 
## SWBAT
- Understand How JSON server works.
- Create a JSON server from scratch
- Use POSTMAN to make CRUD requests to your JSON server

### Review HTTP and CRUD
| URL          | HTTP Verb   | CRUD Action  | 
| ------------ | ----------- |------------- |
| /animals     | GET         |  Read        |
| /animals/:id | GET         |  Read        |
| /animals     | POST        |  Create      | 
| /animals/:id | PATCH       |  Update      |
| /animals/:id | DELETE      |  DESTROY     |

### What is an web API?
Application Program Interface
An interface for working with other software using a request response cycle


### What is a RESTFUL API
Representational State Transfer is an architecture network applications.
They use a client-server protocol with HTTP. Server resources can be Crated, Read, Updated or destroyed. It is also language agnostic so it can be used by any programing language. 

### What is JSON server
[reddit's aww json](https://www.reddit.com/r/aww/.json)
[JSON Server](https://www.npmjs.com/package/json-server)

Json-server is an npm package that lets us create a simple REST API 

**Install**
```
npm install -g json-server

touch db.json

json-server --watch db.json

```
## GET Requests 
```
// Will return a collection of animals
GET: http://localhost:3000/animals/

// Will return 1 animal of the matching id
GET: http://localhost:3000/animals/1

```

## POST Requests 
```
// If passed a JSON object this will create a new animal with our webserver 

POST: http://localhost:3000/animals

body = {
    "name": "Red Panda",
    "imageUrl": "https://i1.wp.com/www.redpandanetwork.org/wp-content/uploads/2018/10/Photo-1-for-Give-page.png?fit=584%2C584&ssl=1",
    "description": "not actually a panda",
    "donations": 10 
}

```

## PATCH Requests 
```
// If passed a JSON object this will update the description and donations attributes of of the object with an id of 1 

PATCH: http://localhost:3000/animals/1

body = {
    "description": "not actually a panda but should be",
    "donations": 1000 
}

```

## DELETE Requests 
```
// Will destroy the animal with an id of 1 from the server 

DELETE: http://localhost:3000/animals/1



```

Resources
[What Is A RESTful API? Explanation of REST & HTTP](https://www.youtube.com/watch?v=Q-BpqyOT3a8)
[HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
