import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
    const { user } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!user) {
            // Redirect to login if not authenticated
            navigate('/login', { state: { from: location.pathname }, replace: true });
        } else if (allowedRoles.length && !allowedRoles.includes(user.role)) {
            // Redirect to appropriate dashboard if user doesn't have required role
            const redirectPath = user.role === 'student' ? '/student/dashboard' : '/recruiter/dashboard';
            navigate(redirectPath, { replace: true });
        }
    }, [user, allowedRoles, navigate, location]);

    if (!user) {
        return null; // or a loading spinner
    }

    if (allowedRoles.length && !allowedRoles.includes(user.role)) {
        return null; // or an unauthorized message
    }

    return <>{children}</>;
};

export default ProtectedRoute;