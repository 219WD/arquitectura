import Hero from '../components/Hero.jsx';
import HousePlan from '../components/HousePlan.jsx';
import OurServices from '../components/OurServices.jsx';
import ProjectShowcase from '../components/ProjectShowcase.jsx';    
import ProjectDetails from '../components/ProjectDetails.jsx';
import IndustrialUnits from '../components/IndustrialUnits.jsx';
import ProjectionRental from '../components/ProjectionRental.jsx';
import CTA from '../components/CTA.jsx';
import Footer from '../components/Footer.jsx';

export default function HomeScreen() {
    return (
        <div className="container-homescreen">
            <Hero />
            <HousePlan />
            <ProjectShowcase />
            <OurServices />
            <ProjectDetails />
            <IndustrialUnits />
            <ProjectionRental />
            <CTA />
            <Footer />
        </div>
    );
}