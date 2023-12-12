# JSON API usage

Hi there! The server can be run by calling:
```json-server-auth --watch ./fakeapis/db.js --port 3000 --routes routes.json ``` 

# What works
* Remapping field names to other field names (done for applications). *cost* is turned into *estimated_cos*' in the JSON output.
* Authentication, test@gmail.com with password *lagkage* can be used.
* Multiple sources can be included
* Look up by other than "id" field can be done, see applications.

## Postman notes
* Sign-in via POST to localhost:3000/login sending the following JSON in body (remember to set type to JSON and not Text): 
> { "email": "test@gmail.com", "password": "lagkage" }
* Token that will be returned can be used in following calls by using JWT Bearer as authentication, and sending it Query Param and using the *secret* field.
* localhost:3000/posts is currently protected so you need token to see it.

## Resources for reference
* json-server-auth package: https://www.npmjs.com/package/json-server-auth
* json-server: https://www.npmjs.com/package/json-server
