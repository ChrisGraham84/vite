const App = () => {
  return(
  
   
    <div className="bg-gray-900 text-gray-200 h-screen justify-center" id="container">
      <div className="text-3xl  flex w-screen">
        <ul id="nav" className="flex w-screen h-25 absolute">
          <li className="grow w-3 hover:bg-gray-800 *:hover:block" id="item1">
            <a href="" id="about" className="">About
             
            </a>
            <ul className="hidden">
                <li>Me</li>
                <li>My Work</li>
              </ul>
          </li>
          <li className="grow w-3 hover:bg-gray-800" id="item2">Gallery</li>
          <li className="grow w-3 hover:bg-gray-800" id="item4">Blog</li>
          <li className="grow w-3 hover:bg-gray-800" id="item3">Contact</li>
        </ul>
      </div>
      <div className="bg-blue-700 my-20">
        <div>heading1</div>
        <div>heading2</div>
      </div>
    </div>
  ); 
}


export default App