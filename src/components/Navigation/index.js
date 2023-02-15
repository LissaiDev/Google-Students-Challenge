import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <div>
            <ul className="flex flex-row justify-center gap-5 text-white">
                <li>
                  <Link to='/home'>Home</Link> 
                </li>
                <li>
                    <Link to='/signin'>Sign In</Link>
                </li>
                <li>
                    <Link to='/profile'>Profile</Link>
                </li>
            </ul>
        </div>
    )
}