import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // Add Outlet here
import Home from "./Pages/Home";
import Parcels from "./Pages/Parcels";
import Parcel from "./Pages/Parcel";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Users from "./Pages/Users";

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div className="flex">
          <div className="w-[20%]">
            <Menu />
          </div>
          <div className="w-[80%]">
            <Outlet /> {/* This will render the child routes */}
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/parcel/:parcelId",
          element: <Parcel />,
        },
        {
          path: "/parcels",
          element: <Parcels />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
