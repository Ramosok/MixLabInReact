const ItemMenu = ({tittle, linkTo}) => {
    return (
        <a href={`${linkTo}`}>{tittle}</a>
    );
};

export default ItemMenu;