import React from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import Modal from "../../UI/Modal";
import Title from "../../UI/Title";

const CreateTypeModal = ({ show, closeAction }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    closeAction();
    console.log({ e });
  };
  return (
    <Modal show={show} closeCallback={closeAction}>
      <Title>Create type</Title>
      <form onSubmit={submitHandler}>
        <Input type="text" placeholder="name" />
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
