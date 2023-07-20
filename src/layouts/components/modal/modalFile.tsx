import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'


interface ModalProps {
  show: boolean;
  setModalShow?: any;
  title: string;
  subtitle: string;
  fileExtension: string;
  onYes?: any;
}


const ModalConfirm: React.FC<ModalProps> = ({ show, setModalShow, title, subtitle, fileExtension, onYes }) => {
  const [file, setFile] = useState();

  const fileReader = new FileReader();

  const handleOnChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const csvOutput = event?.target?.result;
        onYes(csvOutput)
      };
      fileReader.readAsText(file)
      handleClose();
    }
  };
  const handleClose = () => setModalShow(false)
  const handleImport = () => {
    handleClose();
    onYes();
  }


  return (
    <Dialog open={show} onClose={handleClose} aria-labelledby='form-dialog-title'>
      <form>
        <DialogTitle id='form-dialog-title'>{title}</DialogTitle>
        <DialogContent >
          Chose a csv file with the wallets to import
          <TextField sx={{mt: 5}}
            type={"file"}
            id={"fileInput"}
            
            // accept={fileExtension}
            onChange={handleOnChange} />
        </DialogContent>
        <DialogActions className='dialog-actions-dense'>
          <Button variant='outlined' color='primary' onClick={(e) => {
            handleOnSubmit(e);
          }}>Import</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default ModalConfirm;
