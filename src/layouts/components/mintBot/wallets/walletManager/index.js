import { useEffect, useState } from 'react';
import DeleteOutline from 'mdi-material-ui/DeleteOutline';
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import ModalConfirm from 'src/layouts/components/modal/modalConfirm';

const WalletManager = () => {
  const [modalShow, setModalShow] = useState(false);
  const [address, setAddress] = useState("")
  const [wallets, setWallets] = useState([]);
  function refreshWalletData() {
    if (typeof (wallets) == "object") {
      setWallets(JSON.parse(localStorage.getItem("wallets")))
    }
    window.onstorage = () => {
      setWallets(JSON.parse(localStorage.getItem("wallets")))
    };
  }
  useEffect(() => {
    refreshWalletData();
  }, []);

  const onDeleteHandler = (address) => {
    return () => {
      setModalShow(true);
      setAddress(address);
    };
  };

  const deleteWallet = () => {
    let currentWallets = JSON.parse(localStorage.getItem("wallets"));
    currentWallets.splice(currentWallets.findIndex(e => e.address === address), 1)
    localStorage.setItem("wallets", JSON.stringify(currentWallets));
    setWallets(currentWallets);
  }

  return (
    <>
      <ModalConfirm
        show={modalShow}
        setModalShow={setModalShow}
        title={"Wallet deletion"}
        subtitle={"you want to delete this wallet?"}
        onYes={deleteWallet}
      />
      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Wallet Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Balance</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {wallets?.length > 0 && wallets.map((_item, _key) => {
              return (
                <TableRow key={_key}>
                  <TableCell component='th' scope='row'>{_key + 1}</TableCell>
                  <TableCell component='th' scope='row'>{_item.name}</TableCell>
                  <TableCell component='th' scope='row'>{_item.address}</TableCell>
                  <TableCell component='th' scope='row'>{Number(_item.balance).toFixed(4)}</TableCell>
                  <TableCell component='th' scope='row'>
                    <Button
                      sx={{ px: 0 }}
                      variant='contained'
                      size="sm"
                      onClick={onDeleteHandler(_item.address)}>
                      <DeleteOutline
                        sx={{ m: 0, p: 0, color: 'primary', }}
                      />
                    </Button >
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default WalletManager;
