import React from 'react';
import {
  Alert,
  Button,
  ButtonGroup,
  Col,
  Container,
  Media,
  Row
} from 'reactstrap';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import shortid from 'shortid';
import axios from 'axios';

const Today = new Date();

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      bioData: [],
      articleHighlights: []
    };
  }

  // componentDidMount() {
  //   axios
  //     .get('/bio.json')
  //     .then(res =>
  //       this.setState({ bioData: [...this.state.bioData, res.data] })
  //     );
  //   axios.get('/articles').then(res =>
  //     this.setState({
  //       articleHighlights: [...this.state.articleHighlights, res.data]
  //     })
  //   );
  // }

  componentDidMount() {
    axios.get('/bio.json').then(res =>
      this.setState(prevState => {
        bioData: [...prevState.bioData, res.data];
      })
    );
  }

  render() {
    return (
      <React.Fragment>
        <header className="text-center d-flex masthead" id="masthead">
          <Container className="my-auto">
            <Row>
              <Col lg="10" md="3" className="mx-auto">
                <h1 className="text-uppercase">
                  <strong>Wiktor Płocki</strong>
                </h1>
              </Col>
              <Col lg="8" md="3" className="mx-auto">
                <p className="mb-5">Frontend Developer</p>
                <ButtonGroup size="lg">
                  <Button className="text-uppercase" href="#about">
                    Learn About Me
                  </Button>
                  <Button className="text-uppercase" href="#blog">
                    Read the Blog
                  </Button>
                  <Button color="primary" className="text-uppercase">
                    Contact Me
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Container>
        </header>
        <main>
          <section id="about">
            <Container>
              <Row>
                <Col lg="12" className="mx-auto">
                  <h2 className="text-center">About Me</h2>
                  <hr className="my-4" />
                  {this.state.bioData.map(item => (
                    <p className="mb-4" key={shortid.generate()}>
                      {item}
                    </p>
                  ))}
                </Col>
              </Row>
            </Container>
          </section>
          <section id="skills">
            <Container>
              <Row>
                <Col lg="12" className="text-center">
                  <h2>My Proficiencies</h2>
                  <hr className="my-4" />
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col lg="3" md="6" className="text-center proficiencies">
                  <div className="mt-5 mx-auto proficiencies__container">
                    <i className="fab fa-4x fa-html5 text-primary mb-3 sr-icons" />
                    <h3 className="mb-3">HTML5</h3>
                  </div>
                </Col>
                <Col lg="3" md="6" className="text-center proficiencies">
                  <div className="mt-5 mx-auto proficiencies__container">
                    <i className="fab fa-4x fa-sass text-primary mb-3 sr-icons" />
                    <h3 className="mb-3">Sass / CSS3</h3>
                  </div>
                </Col>
                <Col lg="3" md="6" className="text-center proficiencies">
                  <div className="mt-5 mx-auto proficiencies__container">
                    <i className="fab fa-4x fa-js text-primary mb-3 sr-icons" />
                    <h3 className="mb-3">JavaScript</h3>
                  </div>
                </Col>
                <Col lg="3" md="6" className="text-center proficiencies">
                  <div className="mt-5 mx-auto proficiencies__container">
                    <i className="fab fa-4x fa-react text-primary mb-3 sr-icons" />
                    <h3 className="mb-3">React</h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section id="blog">
            <Container>
              <Row>
                <Col lg="12" className="text-center">
                  <h2 className="section-heading">From My Blog</h2>
                  <hr className="my-4" />
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col lg="12">
                  {Array.isArray(this.state.articleHighlights) ? (
                    this.state.articleHighlights.map(item => (
                      <div key={shortid.generate()}>
                        <Media key={shortid.generate()}>
                          <Media
                            left
                            to={_.replace(item.url, /^.+api/, '')}
                            tag={Link}
                          >
                            <Media
                              object
                              src="static/img/transparent.png"
                              alt={item.title}
                              className="mr-3"
                              style={{
                                boxSizing: 'border-box',
                                background: `url(${item.image1})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center center',
                                backgroundSize: 'cover',
                                display: 'block',
                                width: `${525}px`,
                                height: `${525}px`
                              }}
                            />
                          </Media>
                          <Media body>
                            <Media heading className="mt-0">
                              <Link to={_.replace(item.url, /^.+api/, '')}>
                                {item.title}
                              </Link>
                            </Media>
                            {item.heading}
                          </Media>
                        </Media>
                      </div>
                    ))
                  ) : (
                    <Alert color="danger">ERROR: No blog articles found!</Alert>
                  )}
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <footer id="footer">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <a href="https://github.com/wiktorplocki">
                  <i className="fab fa-4x fa-github text-primary mb-3 sr-icons" />
                </a>
                <p>&copy; {Today.getFullYear()} Wiktor Płocki</p>
              </Col>
            </Row>
          </Container>
        </footer>
      </React.Fragment>
    );
  }
}

export default Home;
