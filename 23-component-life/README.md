# Component-Lifecycle-Methods

## SWBATs
* Identify why we fetch data using ComponentDidMount
* Write methods that interact with data at different points throughout a component's life


### Lifecycle Methods

[Docs](https://reactjs.org/docs/react-component.html#the-component-lifecycle)

[React Lifecycle Methods Diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

- *constructor(props)*
- *render()*
- *componentDidMount()*
- *componentDidUpdate()*
- *componentWillUnmount()*

#### Birth (Mounting)
- *constructor()*
  - called before it is mounted
- *render()*
  - called after mounting and updating
- *componentDidMount()*
  - invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

#### Life (Updating)
- *render()*
  - called after mounting and updating
- *componentDidUpdate(prevProps, prevState)*
  - invoked immediately after updating occurs. This method is not called for the initial render

#### Death (Unmounting)
- *componentWillUnmount()*
  -  invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().

