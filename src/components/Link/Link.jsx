

const Link = ({route}) => {
    return (
        <div>
            <li className="mr-10 hover:bg-yellow-900 px-6">
                <a href={route.path}>{route.name}</a>
                </li>
        </div>
    );
};

export default Link;