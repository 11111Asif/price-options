import { HiOutlineCheckCircle } from "react-icons/hi";

const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center"><HiOutlineCheckCircle className="mr-2"></HiOutlineCheckCircle>{feature}</p>
        </div>
    );
};

export default Feature;