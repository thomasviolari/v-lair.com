import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Apps from "./pages/Apps/Apps";
import About from "./pages/About/About";
import Contacts from "./pages/Apps/Contacts/ContactsPage";
import Contact from "./pages/Contact/Contact";

export default function App() {
  const { theme, toggle } = useTheme();
  const { pathname } = useLocation();

  useEffect(() => {
    const pages = {
      "/": { title: "V-Lair | Software and project delivery", description: "A Cyprus-based technology partner for public-sector teams, European projects, and organisations delivering useful digital services." },
      "/apps": { title: "Capabilities | V-Lair", description: "Explore V-Lair's software, data, AI, and project management services for teams delivering complex work." },
      "/about": { title: "About | V-Lair", description: "Learn how V-Lair works with teams to shape, deliver, and support useful digital products and projects." },
      "/contact": { title: "Contact | V-Lair", description: "Tell V-Lair about your project, the challenge you are facing, and the support you need." },
      "/apps/contacts": { title: "Relay | V-Lair", description: "Relay is V-Lair's relationship workspace for contacts, follow-ups, and important conversations." },
    };
    const page = pages[pathname] || pages["/"];
    document.title = page.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", page.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", page.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", page.description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", page.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", page.description);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apps/contacts" element={<Contacts />} />
        {/* Add new product routes here:
            <Route path="/apps/my-app" element={<MyApp />} />
        */}
      </Routes>
      <Footer />
    </>
  );
}
