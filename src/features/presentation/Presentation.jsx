import PresentationNavbar from "./components/PresentationNavbar/PresentationNavbar";
import HeroSection from "./components/HeroSection/HeroSection";
import IntroductionSection from "./components/introductionSection/IntroductionSection";
import SystemMap from "./components/systemMap/SystemMap";

import "./presentation.css";
import ModulesSection from "./components/modulesSection/ModulesSection";
import WorkflowSection from "./components/workflowSection/WorkflowSection";
import PermissionsSection from "./components/permissionsSection/PermissionsSection";
import TechnologySection from "./components/technologySection/TechnologySection";
import PresentationFooter from "./components/presentationFooter/PresentationFooter";

const Presentation = () => {
  return (
    <main className="presentation-page" dir="rtl">
      <PresentationNavbar />

      <HeroSection />

      <IntroductionSection />

      <SystemMap />

      <ModulesSection />

      <WorkflowSection />

      <PermissionsSection />

      <TechnologySection />

      <PresentationFooter />

      <div id="modules"></div>
      <div id="technology"></div>
    </main>
  );
};

export default Presentation;
