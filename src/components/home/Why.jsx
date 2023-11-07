import React from "react";
import Title from "../UI/Title";
import WhyCard from "../Card/WhyCard";
import first from "@/assets/svg/icons/09.png";
import sec from "@/assets/svg/icons/4.svg";
import third from "@/assets/svg/icons/10.svg";
import fourth from "@/assets/svg/icons/11.svg";
import five from "@/assets/svg/icons/7.svg";
import six from "@/assets/svg/icons/8.svg";
// import paypal from "@/assets/Paypal.png";

const Why = () => {
  return (
    <div className="w-full py-5 ">
      <div className="lg:mx-[7%] mx-[4%] flex items-center justify-center flex-col">
        <Title ttl="Why Choose Secure Crowd?" />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-4 gap-8">
          <WhyCard
            src={first}
            ttl="Proven Expertise"
            disc="At Secure Crowd, we have a seasoned team of certified penetration testers with a deep understanding of the latest vulnerabilities, exploitation techniques, and countermeasures. "
          />
          <WhyCard
            src={sec}
            ttl="Comprehensive Testing"
            disc="Our penetration testing methodology encompasses a wide range of attack vectors – from network to application-level threats, ensuring all potential vulnerabilities are identified.       "
          />
          <WhyCard
            src={third}
            ttl="State-of-the Art Tools"
            disc="We utilize the latest tools and technologies in the cybersecurity landscape. This, combined with our bespoke in-house tools, allows us to provide unrivaled testing quality."
          />
          <WhyCard
            src={fourth}
            ttl="Clear Reporting"
            disc="Post-assessment, you receive a detailed report, which not only highlights vulnerabilities but also provides actionable recommendations to bolster your security posture."
          />
          <WhyCard
            src={five}
            ttl="Continuous Learning"
            disc="Cyber threats are evolving; so are we. Secure Crowd invests heavily in continuous training and research, ensuring we’re always ahead of the curve."
          />
          <WhyCard
            src={six}
            ttl="24/7 Support"
            disc="Our dedicated support team is available around the clock, providing guidance and answering any queries you might have before, during, or after the testing process."
          />
        </div>
      </div>
    </div>
  );
};

export default Why;
