import React, { useEffect, useState } from 'react'

const App = () => {
  const [storeApi, setStoreApi] = useState([])
  const [searchInput,setSearchInput] = useState("")

  useEffect(() => {
    const fetchdatas = async () => {
      const fetchdata = await fetch("https://dummyjson.com/recipes?limit=10")
      const conevertdata = await fetchdata.json()
      console.log(conevertdata.recipes)
      setStoreApi(conevertdata.recipes)
    }
    fetchdatas()
  }, [])

  const handleChange = (e)=>{
    const searchdata = e.target.value
    setSearchInput(searchdata)
  }
  const filterdata = storeApi.filter((e)=>e.name.toLowerCase().trim().includes(searchInput.toLowerCase().trim()))

  const displayData = searchInput ? filterdata : storeApi 
  
  return (
    <>
    <input type="text"  placeholder='Search......' value={searchInput} onChange={handleChange}/>
    
    {displayData.length > 0 ? (
        displayData.map((e) => (
          <ul key={e.id}>
            <li>{e.id}</li>
            <li>Recipe Name: {e.name}</li>
            <li>Ingredients: {e.ingredients}</li>
            <li>Instructions: {e.instructions}</li>
          </ul>
        ))
      ) : (
        <h2>No Recipes Found</h2>
      )}
    
   
    
    </>
  )
}

export default App