import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Popup from "reactjs-popup";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { observer, inject } from "mobx-react";

const UpdatePop = (props) =>{
console.log("gyhujifekwrefyhujikoijhuytfgyhujiko");
const [open, setOpen] = useState(false);
const [name, setName] = useState("");
const [id, setId] = useState("");
const [img, setImg] = useState("");
const [price, setprice] = useState("");
const [description, setdescription] = useState("");
const [category, setcategory] = useState("");
const [vegan, setvegan] = useState("");
const [gluten, setgluten] = useState("");

const handleClickOpen = () => {
  setOpen(false);
};

const handleClose = () => {
  setOpen(true);
};
const handleName = (e) => {
  let t = e.target.value;
  console.log(t);
  setName(e.target.value);
};
const handleid = (e) => {
  let t = e.target.value;
  console.log(t);
  setId(e.target.value);
};
const handleimg = (e) => {
  let t = e.target.value;
  console.log(t);
  setImg(e.target.value);
};
const handleprice = (e) => {
  let t = e.target.value;
  console.log(t);
  setprice(e.target.value);
};
const handledescription = (e) => {
  let t = e.target.value;
  console.log(t);
  setdescription(e.target.value);
};
const handlecategory = (e) => {
  let t = e.target.value;
  console.log(t);
  setcategory(e.target.value);
};
const handlevegan = (e) => {
  let t = e.target.value;
  console.log(t);
  setvegan(e.target.value);
};
const handlegluten = (e) => {
  let t = e.target.value;
  console.log(t);
  setgluten(e.target.value);
};

const update = () => {
  props.list.updatePerson(
    id,
    name,
    img,
    price,
    description,
    category,
    vegan,
    gluten
  );
  handleClose();
};

return (
  <div>
    <Dialog
      open={open}
      onClose={handleClickOpen}
      aria-labelledby="form-dialog-title"
    >
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Name"
        type="string"
        value={name}
        onChange={handleName}
        // fullWidth
      />
      <TextField
        autoFocus
        margin="dense"
        id="id"
        label="id"
        type="string"
        value={id}
        onChange={handleid}
      />
      <TextField
        autoFocus
        margin="dense"
        id="img"
        label="img"
        type="string"
        value={id}
        onChange={handleimg}
      />
      <TextField
        autoFocus
        margin="dense"
        id="price"
        label="price"
        type="string"
        value={price}
        onChange={handleprice}
      />
      <TextField
        autoFocus
        margin="dense"
        id="description"
        label="description"
        type="string"
        value={description}
        onChange={handledescription}
      />
      <TextField
        autoFocus
        margin="dense"
        id="description"
        label="description"
        type="string"
        value={description}
        onChange={handledescription}
      />
      <TextField
        autoFocus
        margin="dense"
        id="category"
        label="category"
        type="string"
        value={category}
        onChange={handlecategory}
      />
      <TextField
        autoFocus
        margin="dense"
        id="vegan"
        label="vegan"
        type="string"
        value={vegan}
        onChange={handlevegan}
      />
      <TextField
        autoFocus
        margin="dense"
        id="gluten"
        label="gluten"
        type="string"
        value={gluten}
        onChange={handlegluten}
      />
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={update}>Update</Button>
      </DialogActions>
    </Dialog>
  </div>
);
}
export default  (observer(UpdatePop));
