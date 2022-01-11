import {Link} from "react-router-dom";

const ItemMenu = ({tittle, linkTo,id}) => {
    return (
        '/' ? <Link to={linkTo}>{tittle}</Link> : <a href={linkTo}>{tittle}</a>
    );
};

export default ItemMenu;