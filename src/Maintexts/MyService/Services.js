import ServiceCard from "../../ComponentsUI/ServiceCard";
import "./Services.css";

export default function Services() {
  // Define the service texts
  const servicesText = [
    "I create distinctive websites customized to reflect your brand identity, ensuring scalability, optimal performance, accessibility, and captivating animations tailored specifically to your brand.",
    "I specialize in designing user-centric websites that not only enhance your brand but also drive your business goals. My focus on clean typography and minimal layouts ensures a compelling online presence for your brand.",
    "Beyond creating visually captivating websites, I specialize in enhancing your online presence to boost your visibility in search rankings. With my expertise, your brand can effectively stand out in the digital landscape.",
    "Crafting memorable brand identities tailored to your audience. With a focus on distinctive visuals and messaging, your brand will leave a lasting impact in the market."
    // Define texts for other services (SEO, Branding, etc.) if needed
  ];

  return (
    <div className="whitebtn-div">
      <div className="services-section">
        {["Web Development", "Web Design", "SEO", "Branding"].map(
          (text, index) => (
            <ServiceCard
              key={index}
              text={text}
              textNumber={index + 8 > 9 ? index + 8 : `0${index + 8}`}
              servicesText={servicesText[index]} // Pass the corresponding service text
            />
          )
        )}
      </div>
      <button className="info info-white button-font">More works</button>
    </div>
  );
}
