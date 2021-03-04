## Party Cat
## Learning Goals
- Use json-server to provide a basic RESTful data store
- Build a simple, event-driven, JavaScript DOM-modifying application

## JSON
If you don't have json-server installed, run 
```
$ npm i -g json-server.
```
If you already have it installed, run the server by: 

```
$ json-server --watch db.json
```

## Routes
```
GET/POST: http://localhost:3000/cats
PATCH/DELETE: http://localhost:3000/cats/:id

example data:
    {
      "name": "Rose",
      "image": "assets/gm_cat.jpg",
      "catchphrase": "shout out to the 2 crew",
      "likes": 100
      "id": 3
    }

```

## Party APP
We will be building an app to help keep track of our party Guests!
We have an <aside> where our guest list should go and a <main> that should contain a selected cat that shows all of that cats detail. 

- Fetch all of the cats, create a <li> tag with the cats name and add each cat name to the <aside>'s <ul> 

- The <main> should  populate with a default cat on page load. The <main> tag should contain ever element you need. Creating additional elements should not be necessary.

- Clicking on a cat from the guest list should remove the data from the current selected cat and add the data from the cat that was clicked

- Use the form to add a new cat to the DOM (optimistic rendering)

- Send the new cat through a POST so it persists on page reload

- Clicking the Like button should add a like to the cat. Send a PATCH to update the likes and update the likes on the DOM after the PATCH as sent a response. (pessimistic rendering) 

**Stretch**
- Add an edit cat btn to the main cat section. 
- Clicking the edit btn should populate the form with the selected cats info
- Submitting the form at this point should send a PATCH that updates the existing cats info instead of creating a new cat. The DOM should update with the new information.





