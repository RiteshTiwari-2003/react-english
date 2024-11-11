# start of react js on main hannel

# Introduction:

react is a populer javascript library for building user inerface , particularly single page application where dynamic content and interaction are crucial , developed by facebook , react enable developer to create reusable components , making it efficient and flexible for building complex and interactive ui.

# key component to use react in project:

# 1. component based architecture:

react uses a component based architecture , meaning the ui devided into independent reusable peace of code called component ,
each component has its own logic and structure that allow you to build menage and test each part of ui seperatly
react actually alone does not do anything we need to tell it that wherever i want to run my application, so react has a couple of version so there is one known as react dom which is version or connector of the react which talk to my dom in the browser,it is a web application

# 2. vertual dom for improved performance:

react uses a vertual dom that efficiently update and render components when data changes , instead of re rendering the entire page,
react only update the part of ui that ahve changed , which significantly inhanse the performanse , espacially in complex application.

# 3. declarative syntex:

react follows a declarative programming approach ,meaning you describe how the ui should look for a particulr state , and he react take care of updating the dom to match this state,

# 4. jsx(javascript xml):

react uses jsx, a syntex extension that lets you write html directly with in javascript.this make code more readble and allows for combining markup and logic within a component , with simplyfies development.

react uses one way data binding , meeaning data flow in a single direction, from parents to child component , this unidirectional flow makes application easier to understood , espasially as the scale , and make state management more predictable .

# context api in react provides a way to share value (such as data or function) between components without having pass the props through every level of the compionent tree.it's particularly useful when you have data that many components need access to but that's not practical to pass down manually props at each lvel

key components of context api : creating a context use React.createContext() to create a new context objectit return a provider and consumer components , 2. provider components: the provider components,<MyContext.Provider>, allow you to pass down a value to any compone ts that need it,the value can be any data-objects, array, function, etc.

# const MyContext=React.createContext()

# function App(){const user={name:"ritesh", age:21}; return (<MyContext.Provider value={user}> <SomeChildComponent/></MyContext.provider>);}

# 3. consumer componet: the Consumer component, <MyContext.Consumer>, is used to access the context value in child component, however, with react hook, you can use the useContext for easier access

# function SomeChildComponet(){const user=useContext(MyContext); return <p>{user.name } is {user.age} years old.</p>;}

# useContext() hook : useContext() simplifies accessing context in functional componnet making the code easier to read and maintain

# const user=useContext(MyContext); the context api is particularly helpful when managing global data such as user authentication satatus, theme setting , or localization data in app

# context api vs redux

in react , context api and redux both are used as a tools for managing state, but htey are using slightly different sinario and have unique advantage,

# context api:

context api is a built in react feture for passing data through the component tree without manually passing props at every level.
purpose: it allows you to share state globally across your app without "prop drilling "(manually passing props down multiple component layer )

use: good for managing simpler , less dynamic state like theme setting , user information , language preference or global configuration

# how it work:

with React.createContext() , you can create a context that can then be wrapped around componet to make the data accessible to any nested compionent using useContext, or Context.Consumer.

# props:

Native to react , so no additional dependency
great for managing simpler globl state

# cons:

not designed for complex state logic, ashyncronous action, or debugging state change

# redux

redux is external state management library that provide a predictable state container for javascript application,
purpose : manages application state in a centralized store, making it easy to manage complex state logic and ashyncronous application
use case : ideal for large-scale application where state logic become complex , or if the app has many components interacting with each other or fetching and manipulating data.

how it work:
In redux a single "store" hold the entire appllication state and state can only be updated through "actions" that describe events and changes , reducer process these these action and update the state

# props :

good for complex state logic and asynchronous flow
extensive debbuging tools and middleware (like redux-thank for handling async action)
predictable structured management state

# cons:

require more boilerplate code (actions, reducer)
adds an additional dependency and learning curve

# context api vs redux:

simplicity : context api is simper and easier to set up, making it ideal for smaller application or simpler global state
state complexity: redux is designed to handle complex and dynamic state management espacially if your app has data that changes frequently and need strict state transition

asynchronous handling: redux excels at handling asynchronous state with middleware while context api alone lack this functionality

performance: the context api might lead to unneccesary re render when when dealing with complex state across many components, redux can help in this senario due to its structured data flow

debugging : redux offer powerful dev tools for debugging and tracking state change, which can be crucial for longer project

in sumurry: context api use for smaller app or simple global state like user setting and theme
use redux for larger application where you need more structure , control over asynchronous state change and debugging capabilities
