import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center justify-center items-center">
            <h2>Oops!!</h2>
            <Link to = "/">Go back to Home</Link>
        </div>
    );
};

export default ErrorPage;