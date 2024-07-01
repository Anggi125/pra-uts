import { Link } from "react-router-dom";

export default function Header() {
    return(
        <div className="flex justify-between bg-blue-500 p-6 ">
            <h1>STORE</h1>
            <div>
                <ul className="flex gap-10 hover:text-slate-300">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Product</Link></li>
                    <li><Link to="/about">About</Link></li>
                   
                </ul>
            </div>
        </div>
    )
}