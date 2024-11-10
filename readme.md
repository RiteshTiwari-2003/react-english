# start of react js on main hannel

# react actually alone does not do anything we need to tell it that wherever i want to run my application, so react has a couple of version so there is one known as react dom which is version or connector of the react which talk to my dom in the browser,it is a web application

# context api in react provides a way to share value (such as data or function) between components without having pass the props through every level of the compionent tree.it's particularly useful when you have data that many components need access to but that's not practical to pass down manually props at each lvel

# key components of context api : creating a context use React.createContext() to create a new context objectit return a provider and consumer components , 2. provider components: the provider components,<MyContext.Provider>, allow you to pass down a value to any compone ts that need it,the value can be any data-objects, array, function, etc.

# const MyContext=React.createContext()

# function App(){const user={name:"ritesh", age:21}; return (<MyContext.Provider value={user}> <SomeChildComponent/></MyContext.provider>);}

# 3. consumer componet: the Consumer component, <MyContext.Consumer>, is used to access the context value in child component, however, with react hook, you can use the useContext for easier access

# function SomeChildComponet(){const user=useContext(MyContext); return <p>{user.name } is {user.age} years old.</p>;}

# useContext() hook : useContext() simplifies accessing context in functional componnet making the code easier to read and maintain

# const user=useContext(MyContext); the context api is particularly helpful when managing global data such as user authentication satatus, theme setting , or localization data in app
