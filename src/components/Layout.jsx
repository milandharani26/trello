import Navbar from "./Navbar"
import Sidebar from "./Slidebar"

function Layout() {
    return (
        <>

            <Navbar />

            <div>
                <div>
                    <Sidebar/>
                </div>
            </div>

        </>
    )
}

export default Layout
