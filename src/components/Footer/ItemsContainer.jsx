import Item from "./Item";
import {ABOUT} from "./Menus";
import { Link } from "react-router-dom";

export default function ItemsContainer() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
            <Item Links={ABOUT} title="ABOUT" />
        </div>
    );
};