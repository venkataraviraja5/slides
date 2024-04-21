import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Navbar from "./componets/Navbar/Navbar";
import Main from "./componets/Main/Main";
import BulletPoints from "./componets/BulletPoints/BulletPoints";
import CodeSnippets from "./componets/CodeSnippets/CodeSnippets";

function App() {

  const browserRouter = createBrowserRouter([
    {
      path:"/",
      element:<Navbar />,
      children:[
        {
          path:"/",
          element:<Main />
        },
        {
          path:"/slides",
          element:<BulletPoints />
        },
        {
          path:"/code",
          element:<CodeSnippets />
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={browserRouter}/>
    </div>
  );
}

export default App;
