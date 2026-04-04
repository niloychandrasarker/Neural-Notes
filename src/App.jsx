import { Route, Routes } from "react-router-dom";
import CoverPage from "./pages/CoverPage";
import ConceptDetailPage from "./pages/ml-concept/ConceptDetailPage";
import ConceptsPage from "./pages/ml-concept/ConceptsPage";
import OptionalCourseDetailPage from "./pages/phitron/OptionalCourseDetailPage";
import OptionalCoursePage from "./pages/phitron/OptionalCoursePage";
import PhitronPage from "./pages/phitron/PhitronPage";
import TocPage from "./pages/TocPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CoverPage />} />
      <Route path="/toc" element={<TocPage />} />
      <Route path="/phitron-ai-ml" element={<PhitronPage />} />
      <Route
        path="/phitron-ai-ml/optional-course"
        element={<OptionalCoursePage />}
      />
      <Route
        path="/phitron-ai-ml/optional-course/:slug"
        element={<OptionalCourseDetailPage />}
      />
      <Route path="/concepts" element={<ConceptsPage />} />
      <Route path="/concepts/:slug" element={<ConceptDetailPage />} />
    </Routes>
  );
}

export default App;
