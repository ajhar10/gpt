import React from "react";
import Feature from "../../components/features/Feature";
import "./features.css";

const Features = ({ title, text }) => {
  const features = [
    {
      title: "Improving end distrusts instantly ",
      description:
        "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
    {
      title: "Become the tended active",
      description:
        "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    },
    {
      title: "Message or am nothing",
      description:
        "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    },
    {
      title: "Really boy law county",
      description:
        "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
    },
  ];
  return (
    <div className="gpt__features section_padding " id="features">
      <div className="gpt__features-heading">
        <h1 className="gradient_text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt__features-container">
        {features.map((item, index) => (
          <Feature
            title={item.title}
            text={item.description}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
