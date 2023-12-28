import Maincontainer from "./components/MainContainer";
import Error from "./components/Error";
import WatchPage from "./components/WatchPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./utils/store";
import { Provider } from "react-redux";
import Searchresult from "./components/Searchresult";
import Layout from "./Layout";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Layout/>,
  errorElement: <Error/>,
  children:[
    {
      path:"/",
      element:<Maincontainer/>
    },
    {
      path:"/watch",
      element:<WatchPage/>
    },
    {
      path:"/results/:searchTxt",
      element:<Searchresult/>
    },
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}/>
    </Provider>
  );
}
export default App;
