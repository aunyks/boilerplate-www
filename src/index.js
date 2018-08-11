import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ApiClient from 'utils/ApiClient';
import AccountStore from 'stores/AccountStore';
import Web3Store from 'stores/Web3Store';
import Home from 'views/Home';
import About from 'views/About';
import Page404 from 'views/404';
import 'index.scss';
//import 'assets/favicon.ico';

const apiClient = new ApiClient('http://localhost:3000');
const web3Store = new Web3Store();
const stores = {
  ethereum: web3Store,
  account: new AccountStore(web3Store.isWeb3Enabled)
};

// eslint-disable-next-line no-undef
if (__DEV__) {
  window.client = apiClient;
  window.stores = stores;
}

const App = () => (
  <Provider {...stores}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
