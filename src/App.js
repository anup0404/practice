import React from 'react'
import Cards from './Cards'
function App() {
  const data=[{
    title:'card 1',
    desc:'1st card'
   },{
    title:'card 2',
    desc:'2nd card'
   },
   {
    title:'card 3',
    desc:'3rd card'
   },
   {
    title:'card 4',
    desc:'4th card'
   },
   {
    title:'card 5',
    desc:'5th card'
   }
]

  return (
    <div>
    {  data.map((item)=><Cards title={item.title} desc={item.desc}/>)}
      
    </div>
  )
}

export default App
