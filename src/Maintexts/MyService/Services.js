import ServiceCard from "../../ComponentsUI/ServiceCard";
import "./Services.css";

export default function Services() {
    return (
      <>
       <div className="whitebtn-div">
        <div className="services-section">
          {['Web Development', 'Web Design', 'Seo', 'Branding'].map((text, index) => (
            <ServiceCard key={index} text={text} />
          ))}
        </div>
        <button className="info info-white button-font">More works</button>
      </div>
      </>
    );
  }
  