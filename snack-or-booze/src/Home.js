import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

// Homepage
// Contains Props:
  // - snacks: list of snacks
  // - drinks: list of drinks

function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <CardText>
            Our menu includes {snacks.length} appetizing snacks and {drinks.length} refreshing drinks!
          </CardText>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
