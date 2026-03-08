import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { BackToTop } from "./components/BackToTop";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";
import { MannedGuarding } from "./pages/MannedGuarding";
import { EventSecurity } from "./pages/EventSecurity";
import { KeyHolding } from "./pages/KeyHolding";
import { MobilePatrols } from "./pages/MobilePatrols";
import { SecurityReception } from "./pages/SecurityReception";
import { ConstructionGuarding } from "./pages/ConstructionGuarding";
import { EventsFestivals } from "./pages/EventsFestivals";
import { RetailSecurity } from "./pages/RetailSecurity";
import { Accreditations } from "./pages/Accreditations";
import { GenderPayGap } from "./pages/GenderPayGap";
import { GenderPayGapReport } from "./pages/GenderPayGapReport";
import { Policies } from "./pages/Policies";
import { Vacancies } from "./pages/Vacancies";
import { Training } from "./pages/Training";

/** Shared layout: Header + page content + Footer */
function MainLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Outlet />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* ── Standalone clean-view (no Header / Footer) ── */}
        <Route path="/gender-pay-gap" element={<GenderPayGap />} />
        <Route path="/report/gender-pay-gap-2024" element={<GenderPayGapReport />} />

        {/* ── Main site layout ── */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/manned-guarding" element={<MannedGuarding />} />
          <Route path="/event-security" element={<EventSecurity />} />
          <Route path="/key-holding" element={<KeyHolding />} />
          <Route path="/mobile-patrols" element={<MobilePatrols />} />
          <Route path="/security-reception" element={<SecurityReception />} />
          <Route path="/construction-guarding" element={<ConstructionGuarding />} />
          <Route path="/events-festivals" element={<EventsFestivals />} />
          <Route path="/retail-security" element={<RetailSecurity />} />
          <Route path="/accreditations" element={<Accreditations />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/careers/vacancies" element={<Vacancies />} />
          <Route path="/careers/training" element={<Training />} />
        </Route>
      </Routes>
    </Router>
  );
}
