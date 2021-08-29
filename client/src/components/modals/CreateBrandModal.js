import React, { useState } from "react";
import { createBrand } from "../../http/deviceApi";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import Modal from "../../UI/Modal";
import Title from "../../UI/Title";

const CreateBrandModal = ({ show, closeAction }) => {
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    createBrand({ name });
    closeAction();
  };

  return (
    <Modal show={show} closeCallback={closeAction}>
      <Title>Create Brand</Title>
      <form onSubmit={submitHandler}>
        <Input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant="success" type="submit">
          submit
        </Button>
        <Button variant="danger" type="button" onClick={closeAction}>
          cancel
        </Button>
      </form>
    </Modal>
  );
};

export default CreateBrandModal;
