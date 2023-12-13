# JSON API usage

Hi there! 

Install node.js then do:
```
npm install -g json-server
npm install -g json-server-auth
npm install -g bcryptjs
```

The server can be run by calling:

```
json-server-auth --watch ./data/db.js --port 3000 --routes routes.json --host 0.0.0.0 
``` 

### Parameters:
- Host, for hostname (0.0.0.0 will bind all ports on the machine)
- Port, for our port. 3000 is a good unoccupied port to use.
- Watch, for the file to watch combining all our json files.
- Routes, for custom routing and security lock down of specific endpoints.

# What works
* Remapping field names to other field names (done for applications). *cost* is turned into *estimated_cos*' in the JSON output.
* Authentication, test@gmail.com with password *lagkage* can be used.
* Multiple sources can be included
* Look up by other than "id" field can be done, see applications that mapp appId to id.
* Binding localhost, 127.0.0.1, and IP via -H 0.0.0.0.
* Manual openapi.yaml file for providing Swagger UI capabilities.
* JWT token added as security mechanism in openapi.yaml.

# Outstanding issues
* Automatic openai.yaml generation if possible, can be edited by hand using VS Code Extension OpenAPI (Swagger) Editor.
* How to best add users?

## Postman notes
* Sign-in via POST to localhost:3000/login sending the following JSON in body (remember to set type to JSON and not Text): 
> { "email": "test@gmail.com", "password": "lagkage" }
* Token that will be returned can be used in following calls by using JWT Bearer as authentication, and sending it Query Param and using the *secret* field.
* localhost:3000/posts is currently protected so you need token to see it.

## Resources for reference
* json-server-auth package: https://www.npmjs.com/package/json-server-auth
* json-server: https://www.npmjs.com/package/json-server
* Online openapi.yaml editor for Swagger UI preview: https://editor.swagger.io/?url=https://raw.githubusercontent.com/tsathoqqua/json-api/main/openapi.yaml 
