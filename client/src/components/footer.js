import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className="foot">

            <Link className="foot-links" to="/about/">About Us</Link>
            <Link className="foot-links" to="/contact/">Contact</Link>
            <Link className="foot-links" to="https://github.com/aarpardev/tracker-patches" target="_blank">Github</Link>
        </div>
    )
 }
