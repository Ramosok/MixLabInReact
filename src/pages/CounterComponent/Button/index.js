

const Button = ({className,сlickAction,title}) => {
    return (
        <div>
            <button className={className} type='button' onClick={сlickAction}>{title}</button>
        </div>
    );
};

export default Button;