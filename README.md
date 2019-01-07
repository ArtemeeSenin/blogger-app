# blogger-app
Simple blog made with Node, MongoDB

This app was made as a [task](https://kodaktor.ru/blogapi2.pdf)

Application was [deployed to heroku](https://limitless-reef-49721.herokuapp.com) and is available [here](https://limitless-reef-49721.herokuapp.com)

Backend is made with Express on Node.js, as a database was used MongoDB with Mongoose and deployed to mLab.
Front-end was made with ES6 and simple HTML/CSS.

For CRUD operations under server side there was created api which is used by JavaScript Fetch API

## Routes

### App Routes

* [/](https://limitless-reef-49721.herokuapp.com) – All posts in blog
* [/posts/:id](https://limitless-reef-49721.herokuapp.com/posts/5c335a770adcf10c3b4aeb77) – Single post page
* [/add-post](https://limitless-reef-49721.herokuapp.com/add-post) – Add new post

### API Routes

* [/api/posts](https://limitless-reef-49721.herokuapp.com/api/posts) `GET` – List of all posts data
* [/api/posts](https://limitless-reef-49721.herokuapp.com/api/posts) `POST` – Add new post
* [/api/posts/:id](https://limitless-reef-49721.herokuapp.com/posts/5c335a770adcf10c3b4aeb77) `GET` – Get single post data
* [/api/posts/:id](https://limitless-reef-49721.herokuapp.com/posts/5c335a770adcf10c3b4aeb77) `DELETE` – Remove post by id

#### Response examples

Route: [/api/posts](https://limitless-reef-49721.herokuapp.com/api/posts) `GET`

Response: 
```
[
    {
        "categories":[
            "News"
        ],
        "_id":"5c335aa00adcf10c3b4aeb78",
        "title":"The creator of express will continue his work",
        "content":"After Express he will continue working ...",
        "date":"2019-01-07T13:56:48.199Z"
    },
    {
        "categories":[
            "News"
        ],
        "_id":"5c335a770adcf10c3b4aeb77",
        "title":"Hello world",
        "content":"This is a hello world post",
        "date":"2019-01-07T13:56:07.394Z"
    }
]
```
---

Route: [/api/posts](https://limitless-reef-49721.herokuapp.com/api/posts) `POST` – Add new post

Request: 
```
{
    "categories": [
        "Test",
        "Category"
    ],
    "title": "Example",
    "content": "Example content"
}
```
Response: 
```
{
    "categories": [
        "Test",
        "Category"
    ],
    "_id": "5c33692478e6dc0c745d1283",
    "title": "Example",
    "content": "Example content",
    "date": "2019-01-07T14:58:44.095Z"
}
```
---

Route: [/api/posts/:id](https://limitless-reef-49721.herokuapp.com/posts/5c335a770adcf10c3b4aeb77) `GET` 

Response:
```
{
    "categories": [
        "News"
    ],
    "_id": "5c335a770adcf10c3b4aeb77",
    "title": "Hello world",
    "content": "This is a hello world post",
    "date": "2019-01-07T13:56:07.394Z"
}
```
---

Route: [/api/posts/:id](https://limitless-reef-49721.herokuapp.com/posts/5c335a770adcf10c3b4aeb77) `DELETE` 

Response:
```
{
    "categories": [
        "Test",
        "Category"
    ],
    "_id": "5c33692478e6dc0c745d1283",
    "title": "Example",
    "content": "Example content",
    "date": "2019-01-07T14:58:44.095Z"
}
```
