import { useState } from "react";
import Web3 from "web3";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const GasCalculator = () => {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState(0);
  const [gasAmount, setGasAmount] = useState(0);

  const onAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const onAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    getGasAmount().then((result) => setGasAmount(result));
    e.preventDefault();
  };

  const getGasAmount = async () => {
    await window.web3.currentProvider.enable();
    const web3 = new Web3(
      window.web3.currentProvider || "http://localhost:8545"
    );
    const accounts = await web3.eth.getAccounts();
    const gasAmount = await web3.eth.estimateGas({
      to: address,
      from: accounts[0],
      value: web3.utils.toWei(`${Number(amount)}`, "ether"),
    });
    
    return gasAmount;
  };

  return (
    <Col className="mt-5" md={4}>
      <Card border="light">
        <Card.Header>
          <h3 className="text-muted">
            <b>2. Gas Calculator</b>
          </h3>
        </Card.Header>
        <Card.Body className="text-muted">
          {gasAmount === 0 ? null : (
            <Alert variant="success">
              <strong>Gas amount: </strong>
              {gasAmount}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Wallet address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter wallet address to send ether"
                value={address}
                onChange={onAddressChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="amount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter amount of ether to send"
                value={amount}
                onChange={onAmountChange}
                step={0.001}
                min={0}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Calculate
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default GasCalculator;
