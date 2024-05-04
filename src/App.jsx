import { useState } from "react"
import iconcheck from "/images/icon-check.svg"
import iconcross from "/images/icon-cross.svg"
import iconmoon from "/images/icon-moon.svg"
import iconsun from "/images/icon-sun.svg"
import Datas from "./components/Data.json"


export default function App() {
  const [isDark, setIsDark] = useState(true)
  // tao bien check
  const [itemChecks, setItemChecks] = useState(Array(Datas.length).fill(false));
  // tao bien del
  const [delItems, setDelItems] = useState({});
  // khoi tao list ban dau
  const [list, updateList] = useState(Datas);
  // khoi tao list moi
  const [newItemText, setNewItemText] = useState("");
  // dem item
  const [cnt, setCnt] = useState(Datas.length)

  // function check
  const handleCheck = (index) => {
    const updatedChecks = [...itemChecks];
    updatedChecks[index] = !updatedChecks[index];
    setItemChecks(updatedChecks);
  };

  const handleDel = (id) => {
    setCnt(cnt-1)
    // Update delItems state to mark item for deletion
    setDelItems(prevState => ({
      ...prevState,
      [id]: true
    }));
  };
  // tao ham tao list moi
  const handleInputChange = (event) => {
    setNewItemText(event.target.value);
  };
  // ham kich hoat tao list moi
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && newItemText.trim() !== '') {
      const newItem = {
        id: Date.now(), // Unique ID for the new item
        content: newItemText
      };
      updateList([...list, newItem]);
      setCnt(cnt+1)
      setNewItemText(""); // Clear the input field
    }

  };

  return (
    <main className={`min-h-screen ${isDark ? "bg-black " : "bg-white"}`}>
      <section className="flex flex-col justify-center items-center">
        {/* make a to do list */}
        <div className="w-full h-60 bg-desk-dark bg-cover bg-no-repeat">
          <div className="max-w-xl mx-auto mt-20">
            <span className="flex justify-between">
              <h1 className="font-semibold text-white text-2xl">TO DO</h1>
              <button onClick={() => setIsDark(!isDark)}>{isDark ? <img src={iconsun} alt="" /> : <img src={iconmoon} />}</button>
            </span>
            <div className={`${isDark ? "bg-black" : "bg-white"} h-14 flex flex-row items-center gap-2 mt-4 rounded-md`}>
              <div className="p-4">
                <p className="w-8 h-8 border-2 border-gray-600 hover:border-white rounded-full cursor-pointer"></p>
              </div>
              <div>
                <input type="text"
                  placeholder="Create a new to do"
                  className="w-full h-full outline-none bg-transparent text-white"
                  value={newItemText}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress}
                />
              </div>

            </div>

          </div>
        </div>
        {/* result */}
        <div className={`w-full ${isDark ? "text-white" : "text-black"}`}>
          <div className={`max-w-xl mx-auto rounded-sm ${isDark ? "bg-gray-700" : "bg-white"}`}>
            {/* information seacrh */}
            {list.map((Data, index) => (
              <div key={index} className={`${delItems[Data.id] ? "hidden" : "block"} border-2 rounded-sm`}>
                <div className="flex flex-row h-14 justify-between items-center border-b-1">
                  <div className="flex flex-row gap-4 items-center ml-4">
                    <p onClick={() => handleCheck(index)} className={`${itemChecks[index] ? "bg-gradient-to-r from-g1 to-g2" : ""} w-8 h-8 border-2 border-gray-600 hover:border-white rounded-full cursor-pointer`}>{itemChecks[index] ? <img src={iconcheck} className="ml-2 mt-2" /> : ""}</p>
                    <h1 className={`${itemChecks[index] ? "text-gray-500 line-through" : ""}`}>{Data.content}</h1>
                  </div>

                  <img onClick={() => handleDel(Data.id)} src={iconcross} alt="" className=" cursor-pointer p-2" />
                </div>
              </div>
            ))}

            {/* button */}
            <hr className="border-1 border-gray-700" />
            <div className="flex flex-row justify-between mx-2 text-gray-500">
              {/* item? */}
              <h1>{cnt} items left</h1>
              <span className="flex flex-row gap-4">
                <button className="hover:text-white">All</button>
                <button className="hover:text-white">Active</button>
                <button className="hover:text-white">Completed</button>
              </span>
              <button className="hover:text-white">Clear Completed</button>
            </div>
          </div>


        </div>

      </section>
    </main>
  )
}