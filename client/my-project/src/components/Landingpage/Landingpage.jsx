import Navbar from "../Navbar/Navbar";
import Contents from "../Content/Contents";
import Howwework from "../Howwework/Howwework";
import Aboutus from "../Aboutus/Aboutus";
import Whychooseus from "../Whychooseus/Whychsooseus";
import Ourbenefits from "../ourbenefits/Ourbenefits";
import Jobapplication from "../Jobapplications/Jobapplication";
import Advance from "../Advance/Advance";
import Resumebuilding from "../Resumebuilding/Resumebuilding";
import Contact from "../contact/Contact";
import Footer from "../Footer/Footer";
const Landingpage =() =>{
    return(
        <div>
            <Navbar/>
            <Contents/>
            <Howwework/>
            <Aboutus/>
            <Whychooseus/>
            <Ourbenefits/>
            <Jobapplication/>
            <Advance/>
            <Resumebuilding/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Landingpage