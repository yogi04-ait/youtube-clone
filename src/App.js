import Header from "./components/Header";
import Maincontainer from "./components/MainContainer";
import Body from "./components/Body";
import WatchPage from "./components/WatchPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children:[
    {
      path:"/",
      element:<Maincontainer/>
    },
    {
      path:"/watch",
      element:<WatchPage/>
    },
  ]
}])

function App() {
  return (
    <div>
      <Header/>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
