import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Web3 from "web3";

import { infuraUrl } from "../../../utils/config";

const GasTracker = () => {
  // eslint-disable-next-line no-unused-vars
  const [timer, setTimer] = useState(10);
  const [gasPrice, setGasPrice] = useState(0.0);

  useEffect(() => {
    getGasPrice().then((r) => {
      setGasPrice(Number(r).toFixed(2));
    });
    const interval = setInterval(_setGasPrice, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getGasPrice = async () => {
    const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl));
    let result = await web3.eth.getGasPrice();

    return web3.utils.fromWei(result, "shannon");
  };

  const _setGasPrice = () => {
    setTimer((_timer) => {
      if (_timer === 0) {
        getGasPrice().then((r) => {
          setGasPrice(Number(r).toFixed(2));
        });

        return 10;
      } else {

        return _timer - 1;
      }
    });
  };
  
  return (
    <Col className="mt-5" md={4}>
      <Card border="light">
        <Card.Header>
          <h3 className="text-muted">
            <b>3. Live Gas Tracker</b>
          </h3>
        </Card.Header>
        <Card.Body className="text-muted">
          <Col className="d-flex justify-content-center mt-3 mb-3">
            <h5>Next update in {timer}s</h5>
          </Col>
          <Col className="d-flex justify-content-center">
            <h3>{gasPrice} gwei</h3>
          </Col>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default GasTracker;
