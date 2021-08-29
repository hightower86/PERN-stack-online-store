import React, { useState } from "react";
import { createType } from "../../http/deviceApi";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import Modal from "../../UI/Modal";
import Title from "../../UI/Title";

const CreateTypeModal = ({ show, closeAction }) => {
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    createType({ name });
    setName("");
    closeAction();
    console.log({ e });
  };

  return (
    <Modal show={show} closeCallback={closeAction}>
      <Title>Create type</Title>
      <form onSubmit={submitHandler}>
        <Input
          name="name"
          type="text"
          placeholder="name"
          onChange={(e) => {
            console.log(e.target.value);
            setName(e.target.value);
          }}
          value={name}
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

export default CreateTypeModal;
