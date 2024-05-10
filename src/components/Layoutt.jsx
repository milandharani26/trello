import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Sidebar from "./Layout"

function Layout() {
    return (
        <>

            {/* <Navbar /> */}

            <div>
                <div>
                    <Sidebar>
                        <Outlet />
                    </Sidebar>
                </div>
            </div>

        </>
    )
}

export default Layout
