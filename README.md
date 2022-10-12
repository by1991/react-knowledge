# React Knowledge Collections
For React learning
- How To Call Web APIs with the useEffect Hook in React
  https://www.digitalocean.com/community/tutorials/how-to-call-web-apis-with-the-useeffect-hook-in-react
- How To Handle Async Data Loading, Lazy Loading, and Code Splitting with React
  https://www.digitalocean.com/community/tutorials/how-to-handle-async-data-loading-lazy-loading-and-code-splitting-with-react
- Lifecycles:
  1. static getDerivedStateFromProps()
  2. render()
  3. componentDidMount()
  4. static getDerivedStateFromProps()
  5. shouldComponentUpdate()
  6. getSnapshotBeforeUpdate()
  7. componentDidUpdate()
  8. componentWillUnmount()
- Virtual DOM vs Real DOM:
  - Virtual DOM is a JavaScript object
- useRef
  https://www.w3schools.com/react/react_useref.asp
- React.memo() vs useMemo()
  https://blog.logrocket.com/react-memo-vs-usememo/
- Redux
  - action (type, payload), dispatch, subscribe, getState, combineReducers
  - reducer must be a pure function, no side effects e.g. HTTP request
  - reducer must return a new object
  - reducer state avoid nesting, better to be flat
- Redux Thunk
  - can dispatch not only an object but also a function and use multiple dispatches in one function
  - A thunk function is a function that accepts two arguments: the Redux store dispatch method, and the Redux store getState method
- Redux Saga
  - a middleware to handle side effects
- Server Side Rendering
  https://asperbrothers.com/blog/server-side-rendering-in-react
- Fiber:
  - split work into chunks and prioritize tasks
  - pause work and come back to it later
  - reuse work or abort it if it's not needed
  - current tree, workInProgress tree