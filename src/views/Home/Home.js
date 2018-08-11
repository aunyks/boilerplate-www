// @flow
import * as React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { withRouter, type RouterHistory } from 'react-router-dom';
import Title from 'components/Title';
import Navbar from 'components/Navbar';
import Notification from 'components/Notification';
import Hero from 'components/Hero';
import Level from 'components/Level';
import GridContainer from 'components/GridContainer';
import GridItem from 'components/GridItem';
import Modal from 'components/Modal';
import Footer from 'components/Footer';
import Web3Store from 'stores/Web3Store';
import ApiClient from 'utils/ApiClient';

type Props = {
  ethereum: Web3Store,
  history: RouterHistory,
  client: ApiClient
};

type State = {
  notification: string,
  featuredItems: Array<Object>
};

class Dashboard extends React.Component<Props, State> {
  state: Object;
  client: ApiClient;
  constructor(props: Props) {
    super(props);
    this.state = {
      notification: 'A notification'
    };
  }

  renderNoEthereumModal() {
    return (
      <Modal
        active
        title="Ethereum makes it better"
        successMsg="Give me Web3!"
        cancelMsg="Later"
        onButtonClick={primaryButton => {
          if (primaryButton) this.props.history.push('/help');
        }}
      >
        <h2>Youre not using ethereum</h2>
      </Modal>
    );
  }

  renderEthereumModal() {
    return (
      <Modal active title="We're Web3 enabled" successMsg="Awesome!">
        <h2>
          You can use <BoldItalic>Ethereum</BoldItalic> right now!
        </h2>
      </Modal>
    );
  }

  renderNoTestnetModal() {
    return (
      <Modal active title="Almost there" successMsg="Okay">
        <h2>
          You&#39;re using a Web3 enabled browser, but you&#39;re not on the
          Ethereum mainnet. You can only shop using Ethereum when on mainnet.
        </h2>
      </Modal>
    );
  }

  render() {
    const { ethereum } = this.props;
    return (
      <React.Fragment>
        <Title title="Page Title" />
        <Navbar title={{ label: 'Title', path: '/' }} />
        {this.state.notification && (
          <Notification
            onExitClick={() => {
              // $FlowFixMe
              this.setState(() => ({
                notification: undefined
              }));
            }}
          >
            {this.state.notification}
          </Notification>
        )}

        <Hero title="Title" subtitle="Subtitle" />

        <Container>
          <Level title="Grid" />
          <GridContainer perRow={3} fillGrid>
            {[1, 2, 3, 4, 5, 6, 7].map(id => (
              <GridItem key={id}>
                <div
                  style={{
                    height: '100px',
                    backgroundColor: 'black',
                    color: 'white'
                  }}
                >
                  {id}
                </div>
              </GridItem>
            ))}
          </GridContainer>
        </Container>
        <Footer />
        {ethereum.isWeb3Enabled && this.renderEthereumModal()}
      </React.Fragment>
    );
  }
}

const Container = styled.div`
  padding: 15px;
`;

const BoldItalic = styled.span`
  font-weight: bold;
  font-style: italic;
`;

export default inject('ethereum')(withRouter(observer(Dashboard)));
