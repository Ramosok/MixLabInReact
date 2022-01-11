import {useState} from "react";
import {navigationList} from "../Header/Navigation/data";
import './burger.css'
import {Link} from "react-router-dom";

export const BurgerMenu = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className='navbar is_active' onClick={showSidebar}>
                <span className='span_one'> </span>
                <span className='span_two'> </span>
                <span className='span_three'> </span>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    {navigationList.map((item) => {
                        return (
                            <li key={item.id} className={item.cName}>
                                {'/' ? <Link to={item.linkTo}>{item.tittle}</Link>
                                    : <a href={item.linkTo}>{item.tittle}</a>}
                            </li>
                        );
                    })}
                </ul>

            </nav>

        </>
    );
};

