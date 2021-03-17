# React-State-Events

## SWBATs

- Learn the difference between props and state, and why one would use one or the other
- Instantiate state in and out of the constructor
- Trigger rerenders by calling setState
- Manipulate the DOM by changing values in state
- Create event handler callbacks that manipulate state




#### **Create State**
  State reflects the current state of our application. What's being shown on the browser and why. Its an key value pair attribute on a instance of a component. It can be accessed with this.state and updated with this.setState.

  There are two ways to define state.
  Can be initialized with a constructor and by calling super.
  "When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement."
  
   as an alternative you can set state without the constructor. The constructor was once needed for class functions but can now be bypassed  
```js
  constructor(){
    super()
    this.state = {
      color: "red"
    }
  }

  state = { color: "red"} 
```


#### **Use State**

```js

<NavBar
     color={this.state.color} 
     title="Paintr"
     icon="paint brush"
     description="an app we made"
/>
```
### Events in React
* [React Synthetic Events](https://reactjs.org/docs/events.html)
 Events can be passed a callback used to trigger changes in state.
 Event handler callbacks should be written as arrow functions to avoid losing context

 * `setState`
      * We use `setState` instead of changing the object directly. In addition to changing the object, `setState` will call the `render` function, this time using the newly updated state values 
      * Changing state is asynchronous. 
      * `setState` takes 2 arguments: The first argument is either an object or a callback that accepts a parameter of the previous state and returns an object. The second argument is a callback that can be called whenever `setState` is finished updating state and rerendering.
            

```js
changeColor = () => {
    this.setState({color: "yellow"})
  }

 render(){
  return (
    <div>

      <NavBar
        color={this.state.color}
        title="Paintr"
        icon="paint brush"
        description="an app we made"
      />

      <button onClick={this.changeColor}>Change color</button>
      
      <PaintingsList paintings={paintings} />
       </div>
          )
      }
     }
```