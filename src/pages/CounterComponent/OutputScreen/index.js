
const OutputScreen = ({className,style,action}) => {
    return (
        <div className={className} style={style}>
            <p>{action}</p>
        </div>
    );
};

export default OutputScreen;