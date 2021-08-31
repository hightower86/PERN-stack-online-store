import React, { useEffect, useState } from "react";
import { useStore } from "../../store";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import Modal from "../../UI/Modal";
import Title from "../../UI/Title";

import Select from "react-select";
import styled from "styled-components";
import {
  createDevice,
  fetchBrands,
  fetchDevices,
  fetchTypes,
} from "../../http/deviceApi";

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
    deviceStore: {
      brands,
      types,
      selectedBrand,
      selectedType,
      setSelectedBrand,
      setSelectedType,
      setTypes,
      setBrands,
    },
  } = useStore();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
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

  const selectFile = (e) => {
    setFile(e.target.files[0]);
    console.log({ file });
  };

  const selectTypeHandler = (e) => {
    const selectedTp = types.filter((t) => t.name === e.value);
    setSelectedType(selectedTp[0]);
    console.log(e.value);
  };
  const selectBrandHandler = (e) => {
    const selectedTp = brands.filter((b) => b.name === e.value);
    setSelectedBrand(selectedTp[0]);
    console.log(e.value);
  };

  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addDevice();
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", file);
    formData.append("brandId", selectedBrand.id);
    formData.append("typeId", selectedType.id);
    createDevice(formData).then((data) => closeAction());
  };

  useEffect(() => {
    if (!types.length) {
      fetchTypes().then((data) => setTypes(data));
    }
    if (!brands.length) {
      fetchBrands().then((data) => setBrands(data));
    }
  }, []);
  return (
    <Modal show={show} closeCallback={closeAction}>
      <Title>Create Device</Title>
      <form onSubmit={submitHandler}>
        <StyledSelect
          options={normTypes}
          placeholder="type"
          label="type"
          onChange={selectTypeHandler}
        />

        <StyledSelect
          options={normBrands}
          placeholder="brand"
          onChange={selectBrandHandler}
        />

        <Input
          type="text"
          placeholder="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <Input
          type="number"
          placeholder="price"
          name="price"
          value={price}
          onChange={(e) => setPrice(+e.target.value)}
        />

        <Input
          type="file"
          placeholder="выберите файл изображения"
          name="file"
          onChange={selectFile}
        />

        <Button variant="success" type="submit" onClick={addDevice}>
          Добавить
        </Button>
        <Button variant="danger" type="button" onClick={closeAction}>
          Закрыть
        </Button>
        <Hr />
        <h4>Дополнительные свойства:</h4>
        <Button variant="primary" onClick={addInfo} type="button">
          Добавить свойство
        </Button>
        {info.map((i) => (
          <Row key={i.number}>
            <Input
              type="text"
              placeholder="Введите название свойства"
              value={i.title}
              onChange={(e) => changeInfo("title", e.target.value, i.number)}
            />
            <Input
              type="text"
              placeholder="Введите описание свойства"
              value={i.description}
              onChange={(e) =>
                changeInfo("description", e.target.value, i.number)
              }
            />
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
