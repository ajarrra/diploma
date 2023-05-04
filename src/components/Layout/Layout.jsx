import { useState } from "react";
import Auth from "../Auth/Auth";
import CartLink from "../CartLink/CartLink";
import Drawer from "../Drawer/Drawer";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import NavToggle from "../NavToggle/NavToggle";
import "./Layout.css";

export default function Layout(props) {
    const [drawerOpen, setDrawerOpen] = useState(false);

    function toggleDrawer() {
        setDrawerOpen(!drawerOpen);
    }

    return (
        <div className="Layout">
            <header>

                <Nav />
                <Logo />

                <NavToggle callback={toggleDrawer} />
                <Drawer open={drawerOpen} toggle={toggleDrawer} />

                <div className="Logo-cart">
                    <Auth />
                    <CartLink />
                </div>

            </header>

            <main>
                {props.children}

            </main>
            <footer>
                Footer
            </footer>

        </div>
    )
}
