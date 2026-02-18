import {Outlet} from "react-router-dom";

export default function Layout()
{
   return <>
      <nav>Navbar</nav>
      <Outlet />
    </>
}