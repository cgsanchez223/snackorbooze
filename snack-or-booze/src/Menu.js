import React from 'react';
import { Link } from "react-router-dom";
import "./Menu.css";
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from "reactstrap";

// Menu will list the items from props
// - items: list of snack or drink in data objects
// - title: "Snacks" or "Drinks"

// Takes most of code from FoodMenu.js.
// Purpose of Menu.js is to also include the drink options.

function Menu({ title, items }) {
    return (
        <section className="col-md-4">
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                        {title} Menu
                    </CardTitle>
                    <CardText>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </CardText>
                    <ListGroup>
                        {items.map(item => (
                            <Link to={`/${title.toLowerCase()}/${item.id}`} key={item.id}>
                                <ListGroupItem>{item.name}</ListGroupItem>
                            </Link>
                        ))}
                    </ListGroup>
                </CardBody>
            </Card>
        </section>
    )
}

export default Menu;