import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link, history } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import  Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import { Redirect } from 'react-router-dom';
import { Modal, Button, InputGroup, FormControl, Row, Container, Col } from 'react-bootstrap';
import { submitSliderStatus, editSlider, updateEditSatusFalse } from '../../actions';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


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
  const [id, setid] = useState(true);
  const [del, setDel] = useState(false);
  const [delId, setdelId] = useState();

  const [search, setSearch] = useState('');
  

  const handleClose = () => {
    props.submitSliderStatus();
      setShow(false);
    };

    const handleCloseDelete = (e) => {
      axios.delete(`http://127.0.0.1:8000/api/sliderDelete/${delId}`)
      .then(res => {
      
       setData(res.data.result);
      });
      
      setDel(false);
      };

      const handleCloseNo = () => {
        setDel(false);
        };

   const onSearch = (e) => {
    setSearch(e.target.value);
  };

  
  const [adata, setData] = useState([]);


  useEffect(() => {
    
     
    axios.post('http://127.0.0.1:8000/api/sliderList', { search })
      .then(res => {
        setData(res.data.result);
      });

  }, [search]);

  useEffect(() => {

    if (props.savedSuccessSlider === true) {
      
      setShow(true);
    }
    else
    { 
      
      setShow(false);
    }

  },[]);

  
 const onDelete = (e) => {
  setdelId(e);
  setDel(true);
 };

 const onEdit = (e) => {
  props.editSlider(e);
 };

 let editRedirect = null;
 

      if(props.idToUpdate)
        {
         
          editRedirect = <Redirect to='/admin/editSlider' />;
        }

  

  return (
     
     
    <div>

{editRedirect}
       <Container>
       <Row>
    <Col>
      <Link to="/admin/addSlider">
        <Button variant="secondary">
            Add Slider
        </Button>

        </Link></Col>
    <Col></Col>
    <Col><InputGroup>
   
   <FormControl
     aria-label="Default"
     name="search"
     onChange={onSearch}
     placeholder="Search"
    
   />
 </InputGroup></Col>
  </Row>
</Container>

<Modal style={{ marginTop: 50 }} show={del} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Message </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you Sure?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
            Yes
          </Button>
          <Button variant="secondary" onClick={handleCloseNo}>
            No
          </Button>
         
        </Modal.Footer>
      </Modal>
    
       
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
            <StyledTableCell align="left">Id</StyledTableCell>
            <StyledTableCell align="left">Image</StyledTableCell>
            <StyledTableCell align="left">Slider Name</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
       { adata.map(user => {
        
         return (
 <tr key={user.id}>
   
 <td>{user.id}</td>
 <td><img style={{ height: 50, width: 50 }} alt="image" src={user.image} /></td>
  <td>{user.slider_name}</td>
  <tr><td onClick={()=>{onDelete(user.id)}}><Delete /></td><td onClick={()=>{onEdit(user.id)}}> <Edit /></td></tr>
  
 
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
      savedSuccessSlider: state.admin.submitted,
      idToUpdate: state.admin.idToUpdate
  };
  };
  export default connect(mapStateToProps, { submitSliderStatus, editSlider, updateEditSatusFalse })(SliderList);
