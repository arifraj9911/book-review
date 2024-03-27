import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import './Root.css';


const Root = () => {
    return (
        <div className="mx-2 lg:max-w-screen-xl lg:mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;