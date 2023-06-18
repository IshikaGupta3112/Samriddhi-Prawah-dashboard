import React, { useEffect, useState } from "react";
import { Route} from "react-router-dom";
import { useHistory } from "react-router-dom";

const ProtectedRoute = (props) => {
    const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUserToken = () => {
        const userToken = localStorage.getItem('access');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
            return history.push('/');
        }
        setIsLoggedIn(true);
    }
    useEffect(() => {
            checkUserToken();
        }, [isLoggedIn]);
    return (
<>
            {
                isLoggedIn ? props.children : null
            }
            </>
    );
}
export default ProtectedRoute;