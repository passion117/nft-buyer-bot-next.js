import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

interface ModalProps {
    show: boolean;
    setModalShow?: any;
    title: string;
    subtitle: string;
    onYes?: any;
}
  

const ModalConfirm: React.FC<ModalProps> = ({ show, setModalShow,title,subtitle,onYes }) => {
const handleClose = () => setModalShow(false)
const handleYes = () =>{
    handleClose();
    onYes();
}
const handleNo = () =>{
    handleClose();
}


  return (
      <Dialog open={show} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>{title}</DialogTitle>
        <DialogContent>
            {subtitle}
        </DialogContent>
        <DialogActions className='dialog-actions-dense'>
          <Button variant='outlined' color='primary' onClick={handleYes}>Yes</Button>
          <Button variant='outlined' color='error' onClick={handleNo}>No</Button>
        </DialogActions>
      </Dialog>
  );
}

export default ModalConfirm;
