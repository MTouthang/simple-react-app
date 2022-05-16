import React from "react";
import Card from "./Card";

const CardSection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          <div className="col-4">
            <Card
              title="LearncodeOnline"
              buttonText="My LCO app"
              desc="This cool plateform for learning code"
            />
          </div>
          <div className="col-4">
            <Card title="Second Card" buttonText="Go to my App" />
          </div>
          <div className="col-4">
            <Card title="third Card" buttonText="More ..." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
