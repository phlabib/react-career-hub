import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="items-center justify-center">
            <h2>Oops!!</h2>
            <Link to = "/">Go back to Home</Link>
        </div>
    );
};

export default ErrorPage;