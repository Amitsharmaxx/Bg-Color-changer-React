import { useState } from "react";

// import './App.css'

function App() {
  const [color, setcolor] = useState("black");

  const [txcolor, settxcolor] = useState("yellow");

  return (
    <>
      <div
        className="w-full h-screen "
        style={{ backgroundColor: color, color: txcolor }}
      >
        <div className="flex items-center justify-center h-full">
          <h1 className=" text-3xl md:text-4xl font-extrabold   shadow-md rounded-lg py-2 px-2  hover:text-5xl  transition-all duration-300  ease-in-out">
            Hi I Am BackGround Color Changer
          </h1>
        </div>

        <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2 ">
          

          <div className="flex flex-wrap justify-center drop-shadow-xl  bg-[#656700] shadow-xl px-5 py-3.5 rounded-3xl gap-4 overflow-hidden text-2xl">

            <button
              onClick={() => {
                setcolor("red");
                settxcolor("black");
              }}
              className="outline-none w-28  py-2   bg-red-600  text-white rounded-3xl shadow-2xl "
            >
              Red
            </button>

            <button
              onClick={() => {
                setcolor("green"), settxcolor("purple");
              }}
              className="outline-none w-28  py-2 bg-green-600  text-white  rounded-3xl  shadow-2xl "
            >
              Green
            </button>

            <button
              onClick={() => {
                setcolor("yellow"), settxcolor("black");
              }}
              className="outline-none w-28  py-2 bg-yellow-600  text-white rounded-3xl  shadow-2xl "
            >
              yellow
            </button>

            <button
              onClick={() => {
                setcolor("pink"), settxcolor("black");
              }}
              className="outline-none w-28  py-2 bg-pink-600   text-white rounded-3xl  shadow-2xl "
            >
              Pink
            </button>

            <button
              onClick={() => setcolor("teal")}
              className="outline-none w-28  py-2 bg-teal-600 text-white rounded-3xl  shadow-2xl "
            >
              Teal
            </button>

            <button
              onClick={() => setcolor("orange")}
              className="outline-none w-28  py-2  bg-orange-600 text-white rounded-3xl  shadow-2xl "
            >
              Orange
            </button>

            <button
              onClick={() => {
                setcolor("blue"), settxcolor("white");
              }}
              className="outline-none w-28  py-2 bg-blue-600 text-white rounded-3xl  shadow-2xl "
            >
              Blue
            </button>

            <button
              onClick={() => setcolor("purple")}
              className="outline-none w-28  py-2 bg-purple-600 text-white rounded-3xl  shadow-2xl   "
            >
              purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
