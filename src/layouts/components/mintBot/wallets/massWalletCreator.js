import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import DialogContentText from '@mui/material/DialogContentText';
import { Fragment, useState, SyntheticEvent, } from 'react';
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { CSVLink } from 'react-csv';
import Box from '@mui/material/Box';
import TrayArrowUp from 'mdi-material-ui/TrayArrowUp';
import TrayArrowDown from 'mdi-material-ui/TrayArrowDown';
import ModalFile from 'src/layouts/components/modal/modalFile';
import { csvJSON } from 'src/utils';
import Wallet from 'src/model/Wallet';

function MassWalletCreator({
  show,
  onBtnGroupClickHandler,
  onCreateHandler,
  walletBufArr,
  setModalShow
}) {
  const [modalShowImport, setModalImportShow] = useState(false);
  const handleImportClick = () => {
    setModalImportShow(true);
  }
  const importWallets = (file) => {
    let csvtojson = csvJSON(file);
    let currentWallets = JSON.parse(localStorage.getItem("wallets"));
    const mergedWallets = Wallet.mergeImport(currentWallets, csvtojson);
    localStorage.setItem("wallets", JSON.stringify(mergedWallets));
    window.dispatchEvent(new Event('storage'))
  }
  const handleClose = () => setModalShow(false)
  const handleClickOpen = () => setModalShow(true)
  const headers = [
    { label: "name", key: "name" },
    { label: "address", key: "address" },
    { label: "privateKey", key: "privateKey" },

  ];


  return (

    <Grid item xs={12}>
      <ModalFile
        show={modalShowImport}
        setModalShow={setModalImportShow}
        title={"Wallet import"}
        subtitle={"chose a csv file with the wallets to import"}
        fileExtension=".csv"
        onYes={importWallets}
      />
      <Fragment>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}>
          <Button variant='outlined' onClick={handleClickOpen}>
            Add Multiple Wallets
          </Button>
          <Stack
            direction="row"
            justifyContent="space-end"
            alignItems="center"
            spacing={2}>
            <Button variant='outlined' color='success' startIcon={<TrayArrowUp />} onClick={handleImportClick}>
              Import Wallets
            </Button>
            {localStorage?.getItem("wallets")?.length > 0 ?
              <CSVLink
                data={JSON.parse(localStorage.getItem("wallets"))}
                headers={headers}
                filename={"wallet information.csv"}
                className="btn btn-outline-primary"
              >
                <Button variant='outlined' startIcon={<TrayArrowDown />}>
                  Export Wallets
                </Button>
              </CSVLink> : <></>}
          </Stack>

        </Stack>


        <Dialog open={show} onClose={handleClose} aria-labelledby='form-dialog-title'>
          <DialogTitle id='form-dialog-title'>Generate New Wallets</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ mb: 3 }}>
              New wallets are generated locally on NFT Bloca. You are solely responsible
              for backing up private keys in the event of browser data loss.
            </DialogContentText >
            <DialogTitle id='form-dialog-title'>How many wallets?</DialogTitle>
            <Box>
              <Button variant='contained' sx={{ m: 1 }} size='medium' onClick={onBtnGroupClickHandler} value={1}>1</Button>
              <Button variant='contained' sx={{ m: 1 }} size='medium' onClick={onBtnGroupClickHandler} value={2}>2</Button>
              <Button variant='contained' sx={{ m: 1 }} size='medium' onClick={onBtnGroupClickHandler} value={3}>3</Button>
              <Button variant='contained' sx={{ m: 1 }} size='medium' onClick={onBtnGroupClickHandler} value={5}>5</Button>
              <Button variant='contained' sx={{ m: 1 }} size='medium' onClick={onBtnGroupClickHandler} value={10}>10</Button>
              <Button variant='contained' sx={{ m: 1 }} size='medium' onClick={onBtnGroupClickHandler} value={20}>20</Button>
            </Box>
            {walletBufArr.length > 0 &&
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 400 }} aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Address</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>

                    {walletBufArr.map((_item, _key) => {
                      return (
                        <TableRow key={_key}>
                          <TableCell component='th' scope='row'>{_item.name}</TableCell>
                          <TableCell component='th' scope='row'>{_item.address}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>}

          </DialogContent>
          <DialogActions className='dialog-actions-dense'>
            <Button variant='outlined' color='error' onClick={handleClose}>Cancel</Button>
            <Button variant='outlined' color='info' onClick={handleClose}><CSVLink
              data={walletBufArr}
              headers={headers}
              filename={"wallet information.csv"}
              className="btn btn-outline-primary"
            >Download CSV</CSVLink></Button>
            <Button variant='outlined' color='primary' onClick={onCreateHandler}>Create</Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    </Grid >
  );
}

export default MassWalletCreator;
