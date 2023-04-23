import Auth from "../Auth/Auth";
import CartLink from "../CartLink/CartLink";
import CategoryList from "../CategoryList/CategoryList";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./Layout.css";

export default function Layout(props) {
    return (
        <div className="Layout">
            <header>

                <Nav />
                <Logo />

                <div className="Logo-cart"> 
                    <Auth />
                    <CartLink />
                </div>

            </header>

            <main>
                {props.children}
            </main>

            <aside>
                <CategoryList />
            </aside>




            <footer>
                Footer
            </footer>

        </div>
    )
}
