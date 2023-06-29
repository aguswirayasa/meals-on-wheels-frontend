import "./App.css";
import Registration from "./pages/Registration";
import { Footer } from "./components/Footer";
import Login from "./pages/Login";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import AboutUs from "./pages/AboutUs";
import Partnership from "./pages/Partnership";
import Profile from "./pages/Profile";
import { RequireAuth } from "react-auth-kit";
import { DonationPage } from "./pages/DonationPage";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { LandingPage } from "./pages/LandingPage";
import ContactUs from "./pages/ContactUs";
import AdminDashboard from "./pages/AdminPanel/AdminDashboard";
import Drivers from "./pages/AdminPanel/Drivers";
import Members from "./pages/AdminPanel/Members";
import Partners from "./pages/AdminPanel/Partners";
import Volunteers from "./pages/AdminPanel/Volunteers";
import MealOrderTracker from "./pages/AdminPanel/MealOrderTracker";
import MealPackages from "./pages/AdminPanel/MealPackages";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        {"PUBLIC ROUTES"}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/users/drivers" element={<Drivers />} />
        <Route path="/users/members" element={<Members />} />
        <Route path="/users/partners" element={<Partners />} />
        <Route path="/users/volunteers" element={<Volunteers />} />
        <Route path="/meal-order-tracker" element={<MealOrderTracker />} />
        <Route path="/meal-packages" element={<MealPackages />} />
        <Route
          path="/donation"
          element={
            <PayPalScriptProvider
              options={{
                clientId:
                  "AX67VeMM2VPi4OP3a21N0e2NpVtfcWcEip_AvG2dZ4ZUi6fhCrn6WR51pdGmI9vrVecbvagqDq6GRIsk",
              }}
            >
              <DonationPage />
            </PayPalScriptProvider>
          }
        />

        {"PRIVATE ROUTES"}
        <Route
          path="/profile"
          element={
            <RequireAuth loginPath="/login">
              <Profile />
            </RequireAuth>
          }
        />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
