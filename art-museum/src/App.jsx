import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import harvardArt from "./data/harvardArt" 
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryNavigation/GalleryView";
import { Children } from "react";
console.log(harvardArt)
function App() {
  
  return <RouterProvider router={router}/>;
}
const router = createBrowserRouter([
  {
    element: < Layout/>, 
    children:[
  {
    path: "galleries/:galleryid",
    element:<GalleryView data={harvardArt}/>
  },
  {
  path: "/",
  element: <h1>Harvard Art Museum</h1>
  },
  { 
    path: "*",
    element: <h2>Page Not Found</h2>
  }
    ]
  }
]);
function Layout() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation data={harvardArt} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
