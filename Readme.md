# Express JS tutorial
### from web dev simplified youtube channel

## Starting the application
Nodemon is used because it is helpful in restarting the server in case any changes are made in the file
To create a package.json file:
```bash
npm init -y
``` 

## Requests and APIs
create a get request: app.get(path like "/xyz", callback function like (request, response)=>{})
"app.get("/", (req, res)=>..." : 
When anyone navigates to the path "/", the page is going to make a get request which is why it displays the response on the page.


Types of commands that can be used in a response section of API:
```bash
res.sendStatus(200) -> sends only status code
res.status(200).send("Hello") -> sends status chained with some message
res.download("server.js") -> to download some file on user's side

```

Most preferred way of sending data: 
```bash
res.json({ some json  })
res.status(200).json({message:"Success"})
```
send a file to user to download: 
```bash
res.download(filepath)
```

## Rendering
After rendering the html, a view engine is installed like ejs in this case that will load the html code on the webpage. Rename index.html to index.ejs so it can be loaded by the ejs view engine.

Going to render some html:
```bash
res.render('index')
```

Send some data in index file:
```bash
res.render('index', {text: "Walt Disney"})
```

 ```bash Hello there!<%= text %>``` in the index.ejs code would give an error if text is not sent from the server, so errors would be displayed on the page. To prevent that, use locals.text as locals is a variable that is always defined. If text is passed, it would be shown, else any other default code or no code at all would be displayed.


## Routing in express
While creating routes, often there may be cases where the same route has many different functions like get, post, put and delete and defining each seperately can take up a lot of space. A cleaner method provided by express is to use router.route, which helps chain multiple functions to the same route.

Router.param is a middleware function, which means it runs between the request being sent to the server and the response being sent to the user. So, when defining router.param function remember to add next because it tells  the function what to do after it has completed running its code, else the webpage keeps running in a loop.

So, router.param would run before get, put and delete can send their responses to the user.

### Middleware
All functions like get, put, post and delete can be made into middleware simply by using the ```bash next()``` function. Middleware always runs from top to bottom. If you have any middleware that you want to use everywhere always, define it at the top of the page.

For instance, for the logger function in server.js file, to use it on some specific function:
```bash
app.get("/", logger, (req, res)=>{
    //some code
})
```
To use built-in middleware such as for loading static pages, again rename index.ejs to index.html in public folder.

## Sending data in forms
By default, express does not allow you to access data in the request body, which is why we have to again use middleware.

Express.json() helps parse json data from the request body. Use req.query.(param name) to access whatever parameters are sent in the url.

CORS stands for cross origin resource share.