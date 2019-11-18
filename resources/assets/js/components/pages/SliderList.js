import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Modal, Button } from 'react-bootstrap';
import { submitSliderStatus } from '../../actions';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));



 function SliderList(props) {
   
  const classes = useStyles();

  const [show, setShow] = useState(true);
  

  const handleClose = () => {
    props.submitSliderStatus();
      setShow(false);
    };

  const [adata, setData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/sliderList').then(json => setData(json.data.result))
  }, []);

  useEffect(() => {
    if (props.savedSuccessSlider === true) {
      
      setShow(true);
    }
    else
    { 
      
      setShow(false);
    }

  }, []);

  const renderTable = () => {
    return adata.map(user => {
      return (
        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
          
        </tr>
      );
    });
  };
  
   
  return (
     
    <div>
      <Link to="/admin/addSlider">
        <Button variant="secondary">
            ADD SLider
        </Button>
        </Link>
            <Modal style={{ marginTop: 50 }} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message </Modal.Title>
        </Modal.Header>
        <Modal.Body>Slider Added Successfully</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    <Paper className={classes.root}>
    
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">Slider Name</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
       { adata.map(user => {
         return (
 <tr key={user.id}>
   
 <td>{user.id}</td>
  <td>{user.slider_name}</td>
 
</tr>
         );
       })
       
       }
        
        </TableBody>
      </Table>
    </Paper>
    </div>
  );
}

const mapStateToProps = state => {
  
 
  return {
      savedSuccessSlider: state.admin.submitted
  };
  };
  export default connect(mapStateToProps, { submitSliderStatus })(SliderList);
