import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from './Redux/store';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";



const appRouter=createBrowserRouter([

  {
    path:'/',
    element:<Body/>,
    children:[
      {
        path:'/',
        element:<MainContainer/>,
      },
      {
        path:'/watch',
        element:<WatchPage/>,
      }
    ]

     
  }
])


function App() {
  return (
    <div>
      <Provider store={store}>
        <Head />
        <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  );
}

export default App;



// {/* Head
// body 
//   sidebar
//       MenuItems
//   Main container
//       buttons List
//       Vedio container
//           Vedio card */}