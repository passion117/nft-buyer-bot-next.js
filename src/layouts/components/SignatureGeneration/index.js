import Web3 from "web3";
import { Fragment, useState } from 'react'
import Grid from '@mui/material/Grid'
import Signatures from "./Signatures";
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'

const SignatureGeneration = () => {
  const [open, setOpen] = useState (false)

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  const [signatureArr, setSignatureArr] = useState([]);
  function download_csv_file() {
    console.log(signatureArr)
    let csvKeys = [];
    let csvValues = [];
    for (let i = 0; i < signatureArr.length; i++) {
      csvKeys.push(signatureArr[i].address);
    }
    let csv = csvKeys.toString() + "\n"
    for (let i = 0; i < signatureArr.length; i++) {
      csvValues.push(signatureArr[i].privateKey);
    }
    csv += csvValues.toString();

    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';

    //provide the name for the CSV file to be downloaded  
    hiddenElement.download = 'wallets.csv';
    hiddenElement.click();
  }
  const onClickHandler = (amount) => {
    console.log(amount);
    const web3 = new Web3();
    for (let i = 0; i < amount; i++) {
      let wallet = web3.eth.accounts.create(web3.utils.randomHex(32));
      setSignatureArr((prevArray) => [...prevArray, wallet]);
    }
    download_csv_file();
  };

  return (
    <>
      <Grid item xs={12}>
        <Fragment>
          <Button variant='outlined' onClick={handleClickOpen}>
            Open form dialog
          </Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
            <DialogTitle id='form-dialog-title'>Generate New Wallets</DialogTitle>
            <DialogContent>
              <DialogContentText sx={{ mb: 3 }}>
                New wallets are generated locally on NFT Bloca. You are solely responsible
                for backing up private keys in the event of browser data loss.
              </DialogContentText>
              <DialogTitle id='form-dialog-title'>How many wallets?</DialogTitle>
              <DialogContent>
                <Button variant='contained' sx={{ m: 1 }} size='medium' onClick={() => onClickHandler(1)}>1</Button>
                <Button variant='contained' sx={{ m: 1 }} size='medium' onClick={() => onClickHandler(2)}>2</Button>
                <Button variant='contained' sx={{ m: 1 }} size='medium' onClick={() => onClickHandler(3)}>3</Button>
                <Button variant='contained' sx={{ m: 1 }} size='medium' onClick={() => onClickHandler(5)}>5</Button>
                <Button variant='contained' sx={{ m: 1 }} size='medium' onClick={() => onClickHandler(10)}>10</Button>
                <Button variant='contained' sx={{ m: 1 }} size='medium' onClick={() => onClickHandler(20)}>20</Button>
                <Button variant='contained' sx={{ m: 1 }} size='medium'>+</Button>
              </DialogContent>
            </DialogContent>
            <DialogActions className='dialog-actions-dense'>
              <Button onClick={handleClose}>Save Wallet</Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      </Grid>
      <Signatures signatures={signatureArr} />
    </>
  )
};

export default SignatureGeneration;
