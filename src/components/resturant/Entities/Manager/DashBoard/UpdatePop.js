import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";

import Modal from "react-bootstrap/Modal";
import "./updatepop.css";

import { observer, inject } from "mobx-react";

const UpdatePop = (props) => {
  const [open, setOpen] = useState(true);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [img, setImg] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const [vegan, setvegan] = useState("");
  const [gluten, setgluten] = useState("");
  console.log(name);
  console.log(id);
  console.log(img);
  console.log(price);
  console.log(description);
  console.log(category);
  console.log(vegan);
  console.log(gluten);
  const handleClickOpen = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleid = (e) => {
    setId(e.target.value);
  };
  const handleimg = (e) => {
    setImg(e.target.value);
  };
  const handleprice = (e) => {
    setprice(e.target.value);
  };
  const handledescription = (e) => {
    setdescription(e.target.value);
  };
  const handlecategory = (e) => {
    setcategory(e.target.value);
  };
  const handlevegan = (e) => {
    setvegan(e.target.value);
  };
  const handlegluten = (e) => {
    setgluten(e.target.value);
  };

  const update = () => {
    props.menu.updateItem(
      props.item.id,
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
    <div className="popupside">
      <Dialog
        className="popupupdate"
        open={open}
        onClose={handleClickOpen}
        aria-labelledby="form-dialog-title"
      >
        <h4>Update</h4>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="string"
          value={name}
          onChange={handleName}
        />
        <TextField
          autoFocus
          margin="dense"
          id="id"
          label="id"
          type="Number"
          value={id}
          onChange={handleid}
        />
        <TextField
          autoFocus
          margin="dense"
          id="img"
          label="img"
          type="Url"
          value={img}
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
          <Modal.Footer>
            <Button
              className="btnUpdateClose"
              variant="secondary"
              onClick={handleClose}
            >
              Close
            </Button>
            <Button onClick={update}>Update</Button>
          </Modal.Footer>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default inject("menu")(observer(UpdatePop));
