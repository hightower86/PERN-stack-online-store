import React, { useState } from "react";
import CreateBrandModal from "../components/modals/CreateBrandModal";
import CreateDeviceModal from "../components/modals/CreateDeviceModal";
import CreateTypeModal from "../components/modals/CreateTypeModal";
import Button from "../UI/Button";
import Container from "../UI/Container";
import Title from "../UI/Title";

const Admin = () => {
  const [typeModalOpened, setTypeModalOpened] = useState(false);
  const [brandModalOpened, setBrandModalOpened] = useState(false);
  const [deviceModalOpened, setDeviceModalOpened] = useState(false);
  return (
    <Container>
      <Title> Admin Panel</Title>
      <Button onClick={() => setTypeModalOpened(true)}>Добавить тип</Button>
      <Button onClick={() => setBrandModalOpened(true)}>Добавить брэнд</Button>
      <Button onClick={() => setDeviceModalOpened(true)}>
        Добавить устройство
      </Button>
      <CreateTypeModal
        show={typeModalOpened}
        closeAction={() => setTypeModalOpened(false)}
      />
      <CreateBrandModal
        show={brandModalOpened}
        closeAction={() => setBrandModalOpened(false)}
      />
      <CreateDeviceModal
        show={deviceModalOpened}
        closeAction={() => setDeviceModalOpened(false)}
      />
    </Container>
  );
};

export default Admin;
