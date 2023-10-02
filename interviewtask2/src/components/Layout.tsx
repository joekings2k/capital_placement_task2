import {ReactNode} from "react"
import SideBar from './SideBar'
import { minSideBarWidth,maxSideBarWidth, transition } from "src/utilities/constant";
import useAppContext from "src/hooks/useAppstate";
import Navbar from "./Navbar";


interface props{
  children:ReactNode
}
const Layout = ({children}:props) => {
  const {state} =useAppContext()
  return (
    <div>
      <SideBar />
      
      <div
        style={{
          marginLeft:state.isToggleSideBar? maxSideBarWidth:minSideBarWidth,
          width: `calc(100%-200px)`,
          height: "100%",
          transition:transition,
          padding:"1rem",
        }}
      >
        <Navbar />
        {children}
      </div>
    </div>
  );
}


export default Layout