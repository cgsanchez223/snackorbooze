import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";


// In many places, I rework snacks to an data object with both snacks and drinks in order to replicate a menu without repeating code

function App() {
  const [isLoading, setIsLoading] = useState(true);
  // created a data object with snacks and drinks for full menu
  const [menu, setMenu] = useState({
    snacks: [],
    drinks: []
  });

  // Compiled snacks into items. fetchItems from backend
  useEffect(function() {
    async function getAllItems() {
      const snacks = await fetchItems("snacks");
      const drinks = await fetchItems("drinks");
      setMenu({ drinks, snacks })
      setIsLoading(false);
    }
    getAllItems();
  }, []);

  // Took out API call in previous function. Need to add way to add it back.
  // API will allow user to add item as a "snack" or "drink" and update the state
  async function addItem(type, { name, description, recipe, serve }) {
    let id = slugify(name, { lower: true });
    let objData = { id, name, description, recipe, serve };
    await addItemApi(type, objData);
    // map menu
    setMenu(m => ({
      ...m,
      [type]: [...m[type], objData]
    }));
  }

  // Included menu to reference later
  let { snacks, drinks } = menu;
  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }
  // adding drinks in places with only snacks
  // changing snacks to items in places that only have snacks
  // added drink Route
  // added Route to addItem
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinks} title="Drinks" />
            </Route>
            <Route path="/snacks/:id">
              <Item items={snacks} cantFind="/snacks" />
            </Route>
            <Route path="/drinks/:id">
              <Item items={drinks} cantFind="/drinks" />
            </Route>
            <Route path="/add">
              <AddForm addItem={addItem} />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
