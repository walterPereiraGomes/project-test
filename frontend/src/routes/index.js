import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import Welcome from 'Pages/welcome';
import Input from 'Components/InputFileComponent';
import List from 'Components/ListArquivosComponent';

const routes = () => (
  <Switch>
    <Route path="/enviar" component={Input} exact />
    <Route path="/listagem" component={List} exact />
  </Switch>
);

export default routes;
