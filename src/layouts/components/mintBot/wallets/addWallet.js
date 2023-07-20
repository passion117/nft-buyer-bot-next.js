import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Web3 from 'web3';
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import Plus from 'mdi-material-ui/Plus';
import Minus from 'mdi-material-ui/Minus';
import MassWalletCreator from './massWalletCreator';

// import { addWallets } from '../../../../store/mintBot/actions';

const AddWallet = () => {
  const [addState, setAddState] = useState(false);
  const [walletName, setWalletName] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [privateKey, setPrivateKey] = useState("");
  const [lastCounter, setLastCounter] = useState(0);
  const [walletBufArr, setWalletBufArr] = useState([]);

  useEffect(() => {
    modalShow && setWalletBufArr([]);
  }, [modalShow]);

  const onBtnGroupClickHandler = (e) => {
    let amount = Number(e.target.value);
    const _walletBufArr = [];
    let currentCounter = Number(localStorage.getItem("walletCounter"));
    for (let i = currentCounter; i < currentCounter+amount; i++) {
      const web3 = new Web3();
      const wallet = web3.eth.accounts.create(web3.utils.randomHex(32));
      _walletBufArr.push({
        name: "wallet#" + (i + 1),
        address: wallet.address,
        privateKey: wallet.privateKey,
        balance: 0
      });
      setLastCounter(i + 1);
    }
    setWalletBufArr(_walletBufArr);
  };

  const onCreateHandler = () => {
    let currentWallets = JSON.parse(localStorage.getItem('wallets'));
    if (currentWallets != null) {
      currentWallets.push(...walletBufArr);
    } else {
      currentWallets = walletBufArr;
    }
    localStorage.setItem('wallets', JSON.stringify(currentWallets));
    setModalShow(false);
    window.dispatchEvent(new Event('storage'))
    localStorage.setItem("walletCounter",lastCounter)
  };

  const changeAddState = () => {
    setAddState((addState) => {
      return !addState;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const web3 = new Web3();
    const walletData = web3.eth.accounts.privateKeyToAccount(privateKey);
    let currentWallets = JSON.parse(localStorage.getItem('wallets'));
    let walletToAdd = {
      name: walletName,
      address: walletData.address,
      privateKey: privateKey,
      balance: 0
    }
    if (currentWallets != null && currentWallets) {
      let alreadyWallet = currentWallets.some((element) =>{ return element.address == walletData.address})
      if(!alreadyWallet){
        currentWallets.push(walletToAdd);
      }
    } else {
      currentWallets = [walletToAdd];
    }
    localStorage.setItem('wallets', JSON.stringify(currentWallets));
    window.dispatchEvent(new Event('storage'))
  };

  const onWalletNameChange = (e) => {
    setWalletName(e.target.value);
  };

  const onKeyChange = (e) => {
    setPrivateKey(e.target.value);
  };


  return (
    <div>
      <Button onClick={changeAddState} variant='contained' sx={{ mb: 2 }}>
        {addState === true ? <Minus /> : <Plus />}  Add
        Wallet
      </Button>
      {addState && (
        <Form onSubmit={handleSubmit} className="mt-3">
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField fullWidth label='Wallet Name' placeholder='Super Wallet' value={walletName}
                onChange={onWalletNameChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Private Key' placeholder='0xe1c8325bf0e6ace9debf4d0336c0d23c2d77fdf994b71913158e75354f57823c' value={privateKey}
                onChange={onKeyChange} />
            </Grid>
          </Grid>
          <Button variant="outlined" type="submit" className="w-100" sx={{ mb: 4, mt: 2 }}>
            Submit
          </Button>
        </Form>
      )}


      <MassWalletCreator
        show={modalShow}
        onBtnGroupClickHandler={onBtnGroupClickHandler}
        onCreateHandler={onCreateHandler}
        walletBufArr={walletBufArr}
        setModalShow={setModalShow}
      />
    </div>
  );
};

export default AddWallet;
