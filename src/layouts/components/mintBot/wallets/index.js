import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AddWallet from './addWallet';
import WalletManager from './walletManager';

const Wallets = () => {
  return (
    <Row className="p-3">
      <Col md={3} >
        <AddWallet />
      </Col>
      <Col md={9}>
        <WalletManager />
      </Col>
    </Row>
  );
};

export default Wallets;
