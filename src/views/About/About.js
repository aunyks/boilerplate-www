// @flow
import * as React from 'react';
import styled from 'styled-components';
import Title from 'components/Title';
import Navbar from 'components/Navbar';
import Level from 'components/Level';
import Footer from 'components/Footer';

const About = () => (
  <React.Fragment>
    <Title title="About title" />
    <Navbar title={{ label: 'Title', path: '/' }} />
    <Container>
      <Level title={'About Us'} />
      <hr />
      <Question>Dattebayo!</Question>
      <Answer>
        <Emphasized>Lorem</Emphasized> ipsum dolor sit amet, consectetur
        adipiscing elit. Duis aliquet consectetur felis, non tempus est viverra
        elementum. In mattis luctus nisl, et sollicitudin ipsum interdum nec.
        Integer mollis augue urna, non commodo sapien facilisis id. Sed a
        hendrerit sem, quis suscipit nibh. Sed accumsan commodo sollicitudin.
        Suspendisse congue commodo libero non rutrum. Mauris mollis lectus sed
        libero tempus sodales. Duis fermentum, dolor laoreet ullamcorper
        porttitor, dui erat ornare leo, quis consectetur neque massa ac orci.
        Etiam cursus ut ex vitae condimentum. Mauris facilisis a ipsum et
        vehicula. Donec vestibulum ac neque non varius. Ut dui augue, finibus
        vitae neque in, fringilla consequat ipsum. Aliquam varius in enim et
        ullamcorper. Quisque accumsan iaculis rhoncus.
      </Answer>
      <Question>Lorem Ipsum sit amet</Question>
      <Answer>
        <Emphasized>Lorem</Emphasized> ipsum dolor sit amet, consectetur
        adipiscing elit. Duis aliquet consectetur felis, non tempus est viverra
        elementum. In mattis luctus nisl, et sollicitudin ipsum interdum nec.
        Integer mollis augue urna, non commodo sapien facilisis id. Sed a
        hendrerit sem, quis suscipit nibh. Sed accumsan commodo sollicitudin.
        Suspendisse congue commodo libero non rutrum. Mauris mollis lectus sed
        libero tempus sodales. Duis fermentum, dolor laoreet ullamcorper
        porttitor, dui erat ornare leo, quis consectetur neque massa ac orci.
        Etiam cursus ut ex vitae condimentum. Mauris facilisis a ipsum et
        vehicula. Donec vestibulum ac neque non varius. Ut dui augue, finibus
        vitae neque in, fringilla consequat ipsum. Aliquam varius in enim et
        ullamcorper. Quisque accumsan iaculis rhoncus.
      </Answer>
      <Question>Ipso facto is a wacko</Question>
      <Answer>
        <Emphasized>Lorem</Emphasized> ipsum dolor sit amet, consectetur
        adipiscing elit. Duis aliquet consectetur felis, non tempus est viverra
        elementum. In mattis luctus nisl, et sollicitudin ipsum interdum nec.
        Integer mollis augue urna, non commodo sapien facilisis id. Sed a
        hendrerit sem, quis suscipit nibh. Sed accumsan commodo sollicitudin.
        Suspendisse congue commodo libero non rutrum. Mauris mollis lectus sed
        libero tempus sodales. Duis fermentum, dolor laoreet ullamcorper
        porttitor, dui erat ornare leo, quis consectetur neque massa ac orci.
        Etiam cursus ut ex vitae condimentum. Mauris facilisis a ipsum et
        vehicula. Donec vestibulum ac neque non varius. Ut dui augue, finibus
        vitae neque in, fringilla consequat ipsum. Aliquam varius in enim et
        ullamcorper. Quisque accumsan iaculis rhoncus.
      </Answer>
    </Container>
    <Footer />
  </React.Fragment>
);

const Container = styled.div`
  padding: 50px 75px;
`;

const Question = styled.h1`
  font-size: 1.75em;
`;

const Answer = styled.p`
  margin-bottom: 20px;
`;

const Emphasized = styled.span`
  font-weight: bold;
  font-style: italic;
`;

export default About;
