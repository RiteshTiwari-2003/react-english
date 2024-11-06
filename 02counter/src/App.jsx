import { useState } from 'react'

import './App.css'

function App() {
  //let counter = 15;
  const [counter,setCounter]=useState(15);//counter is a variable and setCounter is a function
  const addValue=()=>{
    setCounter(counter+1);
  }
  const removeValue=()=>{
    setCounter(counter-1);
  }

  return (
    <>
      <h1>React course with ritesh {counter}</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>add value</button>{" "}
      <button onClick={removeValue}>remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
/*what if in addvalue function we repeat line multiple time then no any effect occur on result if you click on add value button the increment is only done of 1 as like before because all the line are same so it seem like there present only oneline so only increment of one is done
but if we use callback function then this problem is solved like setCounter((previousCounter)=>{
  previousCounter+1};), so if we use 4 setCounter method in addvalue then if we click on add value and given initial value as 15 then nex value come is 19.

  react fibre :
  react fibre is ongoing reimplimentatiom of react core algorithm, the goal of react fibre is increase its suitability for area like animation,layout, and gesture,
  its headline feature is incremental rendering,the ability to split rendering work into chunks, and spread it out over multiple frames 

  other key feature include the ability to pause, abort or reusr the work as new updates come, , te ability to assign priority to different type of updates , and new concurrency primitives.

  what is reconcelation?
  the algorithm react uses to diff one tree with another to determine which parts need to be changed.
  update:
  a change in the data used to render a react app,usually the result of setstate,eventually result in a rerender

  the central idea of react api is to think of update as if theycause the entire app to re render.


  actually rerendering the entire ap on each change only works for the most trivial app,in a real world app, it is prohibiently costly in terms of performance,
  react has optimization which create the apperance of whole app rerendering while aintaining great performance,the bulk of thi optimization are part of the process called reconcilation

  in react reconciliation and re rendering are both process that help in updating the user interface.
  reconciliation:
  reconciliation is the process react uses to determine what changes need to be made to the actual dom based on changes in vertual dom.,when the state or props of component change,
  react create a new virtual tree and compare it with the previous vertual dom snap, this process of comparing the new and old vertual dom tree is called diffing 
  during reconciliation:
  react compare the virtual dom trees and identify the minimum number of chang required.
  react only update the part of the real dom that have changed , making update more efficient.
  rerendering :
  rerendering occurs when a component's state and props changes,and it cause react to invoke the Component's render() function(or the function componet itself)
  this rerender:
  create new virtual dom representation of the component's ui.
  update any child componentas well.
  however the re rendering does not means the dom will actually changes, after generating the new virtual dom,react move to reconciliation to determine if any real dom update are  necessary
  key difference
  purpose: rerendering create a new virtual dom,while reconciliation is about comparing the old and new virtual dom to update real dom minimally.
  frequency: rerendering happen whenever state or props changesreconciliation onllyoccur if there is difference between the old and new virtual dom.

  what is fiber?
  we are about to discuss about the heart of the react fiber archtecture, fiber are much lower level absraction than application developer typically think about ,the primary goal of the fiber is to enable react to take advantage of sheduling ,
  specificly we need to be able to
  pause work and comeback to it later,
  assign priority to different type of work
  reuse priviously completed work
  abort work if it is no longer work
in order to do any of this, we first need a way to break work down into unit, in one sence, that's what a fiber is,a fiber represent a unit of work

 */