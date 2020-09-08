import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Counter from './components/Counter';
import Parent from './components/Parent';
import Products from './components/Products';
import Layout from './components/shared/Layout';
import ProductItem from './components/Products/productItem';

function App() {
  return (
    <>
      <Router>

        <Layout>
          {/* <Parent /> // test component */}
          <Switch>
            <Route path="/" exact>
            <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', flexWrap: 'wrap' }}>
              <ProductItem />
            </div>
            </Route>
            <Route path="/product/:id" exact>
              <Products />
            </Route>
            <Route path="/counter" exact>
              <Counter />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
