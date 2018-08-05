import React from 'react';
import ReactDOM from 'react-dom';
import { Col, Container, Row } from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';

require('./stylesheets/main.scss');

const App = () => (
  <Router>
    <Container>
      <Row>
        <Col>
          <Header />
          <Route exact path="/" component={Home} />
        </Col>
      </Row>
    </Container>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
