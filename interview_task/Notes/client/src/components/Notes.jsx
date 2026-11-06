import React, { useState } from "react";

const Notes = () => {
  const [inputnote,setInputnote] = useState("")
  const [storenote,setStorenote] = useState([])
  const [viewnote,setViewnote] = useState(null)

  const handleChange = (e) => {
    setInputnote(e.target.value)
  }

  const handleclick = (e) => {
    e.preventDefault()
    if (inputnote.trim() ==="") {
      alert("Please enter your note")
      return
    }
    setStorenote([...storenote,inputnote])
    alert("Your note is added")
    setInputnote("")
  }

  const handleview = (data,index) => {
    setViewnote(index)
    setInputnote(data)
  }

  const handleUpdate = () => {
    const alreadyStorednote = [...storenote]
    alreadyStorednote[viewnote] = inputnote
    setStorenote(alreadyStorednote)
    setInputnote("")
    setViewnote(null)
  }

  const handleDelete = (index) => {
    const filteredData = storenote.filter((_,i) => i !== index)
    setStorenote(filteredData)
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-400 via-purple-500 to-blue-500 p-8">
      <div className="max-w-5xl mx-auto bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 text-center border border-white/30">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          MY NOTEPAD
        </h1>
        <p className="text-white mt-2 text-lg">
          Write • Update • Delete your Notes
        </p>
      </div>

      <div className="max-w-2xl mx-auto mt-10 bg-white rounded-3xl shadow-2xl p-8">
        <input type="text" placeholder="Enter your note ..." value={inputnote}
          onChange={handleChange}
          className="w-full border-2 border-purple-300 focus:border-pink-500 outline-none rounded-xl p-4 text-lg mb-6"/>

        {viewnote === null ? (
          <button onClick={handleclick}
            className="w-full bg-linear-to-r from-pink-500 to-purple-600 text-white font-bold py-4 rounded-xl hover:scale-105 duration-300 shadow-lg">
            ADD NOTE
          </button>) :
         (
          <button onClick={handleUpdate}
            className="w-full bg-linear-to-r from-green-500 to-emerald-600 text-white font-bold py-4 rounded-xl hover:scale-105 duration-300 shadow-lg">
             UPDATE NOTE
          </button>
        )}
      </div>

    
      <div className="max-w-5xl mx-auto mt-10 bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-linear-to-r from-indigo-600 to-purple-600 text-white text-center py-4">
          <h2 className="text-2xl font-bold">Saved Notes</h2>
        </div>

        {storenote.length === 0 ? (
          <div className="text-center py-10 text-gray-500 text-xl">
            NO NOTE ADDED 
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-purple-100 text-purple-700">
                <tr>
                  <th className="py-4">SL.NO</th>
                  <th>NOTE</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>

              <tbody>
                {storenote.map((e,i) => (
                  <tr key={i}  className="text-center border-b hover:bg-pink-50 duration-300">
                    <td className="py-4 font-bold">{i+1}</td>
                    <td className="px-4">{e}</td>
                    <td className="space-x-3">
                      <button
                        onClick={() => handleview(e, i)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg my-2">View
                      </button>
                      <button
                        onClick={() => handleDelete(i)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">Delete
                      </button>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;