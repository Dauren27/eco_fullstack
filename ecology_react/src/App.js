import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Events from "./pages/EventsPage/Events";
import EventIdPage from "./pages/EventIdPage/EventIdPage";
import TreeProject from "./pages/Projects/TreeProject";
import AnimalProject from "./pages/Projects/AnimalProject";
import CleaningProject from "./pages/Projects/CleaningProject";
import About from "./pages/About/About";
import Donate from "./pages/Donate/Donate";
import Contacts from "./pages/Contacts/Contacts";
import News from "./pages/News/News";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Profile from "./pages/Profile/Profile";
import { useRefreshQuery } from "./redux/reducers/authApi";
import EventsAdmin from "./pages_admin/Events/EventsAdmin";
import NewsAdmin from "./pages_admin/News/NewsAdmin";
import { useSelector } from "react-redux";
import DonationDetails from "./pages/DonationDetails/DonationDetails";

function App() {
  const {} = useRefreshQuery();
  const { user, isAuth } = useSelector((state) => state.auth);

  return (
    <div className="App">
      <BrowserRouter>
        {isAuth && user.email == "Admin" ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventIdPage />} />
            <Route path="/projects/tree" element={<TreeProject />} />
            <Route path="/projects/animal" element={<AnimalProject />} />
            <Route path="/projects/garbage" element={<CleaningProject />} />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/news" element={<News />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/donate/details" element={<DonationDetails />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/admin/events" element={<EventsAdmin />} />
            <Route path="/admin/news" element={<NewsAdmin />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventIdPage />} />
            <Route path="/projects/tree" element={<TreeProject />} />
            <Route path="/projects/animal" element={<AnimalProject />} />
            <Route path="/projects/garbage" element={<CleaningProject />} />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/news" element={<News />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/donate/details" element={<DonationDetails />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
