import { Route, Routes } from "react-router-dom";
import { RequireAuth, RequireAdmin } from "../pages/Shared";
import { useAdmin } from "../hooks";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase.init";
import { Home, Purchase, DashboardCom, Blogs, Portfolio, SignIn, SignUp, NotFound } from "../pages";
const { Dashboard, AddProduct, AddReview, ManageOrders, ManageProducts, MyOrder, MyProfile, Payment, Users } = DashboardCom;

const AllRoutes = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/purchase/:id" element={<RequireAuth> <Purchase /></RequireAuth>} />
            <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
                {!admin && <Route index element={<MyOrder />} />}
                <Route path="review" element={<AddReview />} />
                <Route path={`${admin ? '' : 'profile'}`} element={<MyProfile />} />
                <Route path="manageOrder" element={<RequireAdmin><ManageOrders /></RequireAdmin>} />
                <Route path="addProduct" element={<RequireAdmin><AddProduct /></RequireAdmin>} />
                <Route path="admin" element={<RequireAdmin><Users /></RequireAdmin>} />
                <Route path="manageProducts" element={<RequireAdmin><ManageProducts /></RequireAdmin>} />
                <Route path="payment/:id" element={<Payment />} />
            </Route>
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AllRoutes;