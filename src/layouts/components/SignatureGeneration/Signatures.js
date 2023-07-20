import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import AlertTitle from '@mui/material/AlertTitle';

const Signatures = ({ signatures }) => {
  return (
    <>
      {signatures &&
        signatures.map((val, index) => {
          return (
            <Grid item xs={12} key={index}> 
              <Box >
                <Alert severity=''>
                  <AlertTitle>Wallet {index + 1}</AlertTitle>
                  <strong>Address:</strong> {val.address}<br />
                </Alert>
              </Box>
            </Grid>
          );
        })}
      {!signatures.length && (
        <div className="text-info d-flex justify-content-center">
          <h3>No Signature</h3>
        </div>
      )}
    </>
  );
};

export default Signatures;
