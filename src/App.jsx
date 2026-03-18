import { Route, Routes } from "react-router-dom";
import CoverPage from "./pages/CoverPage";
import ConceptDetailPage from "./pages/ConceptDetailPage";
import ConceptsPage from "./pages/ConceptsPage";
import TocPage from "./pages/TocPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CoverPage />} />
      <Route path="/toc" element={<TocPage />} />
      <Route path="/concepts" element={<ConceptsPage />} />
      <Route path="/concepts/:slug" element={<ConceptDetailPage />} />
    </Routes>
  );
}

export default App;
