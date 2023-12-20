import Header from "./components/Header";
import Maincontainer from "./components/MainContainer";
import Body from "./components/Body";
import Error from "./components/Error";
import WatchPage from "./components/WatchPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./utils/store";
import { Provider } from "react-redux";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
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
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <RouterProvider router={appRouter}/>
    </Provider>
  );
}

export default App;
