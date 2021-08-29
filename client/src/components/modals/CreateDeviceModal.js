import React, { useState } from "react";
import { useStore } from "../../store";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import Modal from "../../UI/Modal";
import Title from "../../UI/Title";

import Select from "react-select";
import styled from "styled-components";

const StyledSelect = styled(Select)`
  margin: 20px 0;
`;
const Hr = styled.hr`
  margin: 10px 0;
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
`;

const CreateDeviceModal = ({ show, closeAction }) => {
  const {
    deviceStore: { brands, types },
  } = useStore();

  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const deleteInfoItem = (num) => {
    const filteredInfo = info.filter((i) => i.number !== num);
    return setInfo(filteredInfo);
  };

  const normBrands = brands?.map((b) => {
    return { value: b.name, label: b.name };
  });
  const normTypes = types?.map((b) => {
    return { value: b.name, label: b.name };
  });

  const submitHandler = (e) => {
    e.preventDefault();
    closeAction();
    console.log({ e });
  };
  return (
    <Modal show={show} closeCallback={closeAction}>
      <Title>Create Device</Title>
      <form onSubmit={submitHandler}>
        <StyledSelect options={normTypes} placeholder="type" label="type" />

        <StyledSelect options={normBrands} placeholder="brand" />

        <Input type="text" placeholder="name" name="name" />

        <Input type="number" placeholder="price" name="price" />

        <Input type="file" placeholder="price" name="price" />

        <Button variant="success" type="submit">
          submit
        </Button>
        <Button variant="danger" type="button" onClick={closeAction}>
          cancel
        </Button>
        <Hr />
        <h4>Дополнительные свойства:</h4>
        <Button variant="primary" onClick={addInfo} type="button">
          Добавить свойство
        </Button>
        {info.map((i) => (
          <Row key={i.number}>
            <Input type="text" placeholder="Название" />
            <Input type="text" placeholder="Описание" />
            <Button
              variant="danger"
              type="button"
              onClick={() => deleteInfoItem(i.number)}
            >
              X
            </Button>
          </Row>
        ))}
      </form>
    </Modal>
  );
};

export default CreateDeviceModal;
