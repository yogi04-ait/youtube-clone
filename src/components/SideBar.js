const SideBar = ()=>{
    return(

        <div className="m-2">

         <ul className="flex flex-col ">
            <li className="hover:bg-gray-300 cursor-pointer rounded-lg p-2 m-1">🏠  Home</li>
            <li className="hover:bg-gray-300 cursor-pointer rounded-lg p-2 m-1">📽️ Reel</li>
            <li className="hover:bg-gray-300 cursor-pointer rounded-lg p-2 m-1 whitespace-nowrap">📩 Subscriptions</li>
         </ul>
         <hr/>
         <ul className="flex flex-col">
            <li className="hover:bg-gray-300 cursor-pointer rounded-lg p-1 m-1">You {">"} </li>
            <li className="hover:bg-gray-300 cursor-pointer rounded-lg p-2 m-1">Your Channel</li>
            <li className="hover:bg-gray-300 cursor-pointer rounded-lg p-2 m-1">History</li>
            <li className="hover:bg-gray-300 cursor-pointer rounded-lg p-2 m-1">Your Video</li>
            <li className="hover:bg-gray-300 cursor-pointer rounded-lg p-2 m-1">Watch Later</li>
            <li className="hover:bg-gray-300 cursor-pointer rounded-lg p-2 m-1">Your Clips</li>
         </ul>

        </div>
    )
}

export default SideBar;