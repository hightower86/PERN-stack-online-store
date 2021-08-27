import React, { useState } from "react";
import CreateTypeModal from "../components/modals/CreateTypeModal";
import Button from "../UI/Button";
import Container from "../UI/Container";
import Title from "../UI/Title";

const Admin = () => {
  const [typeModalOpened, setTypeModalOpened] = useState(false);
  return (
    <Container>
      <Title> Admin Panel</Title>
      <Button onClick={() => setTypeModalOpened(true)}>Добавить тип</Button>
      <Button onClick={() => setTypeModalOpened(true)}>Добавить брэнд</Button>
      <Button onClick={() => setTypeModalOpened(true)}>
        Добавить устройство
      </Button>
      <CreateTypeModal
        show={typeModalOpened}
        closeAction={() => setTypeModalOpened(false)}
      />
    </Container>
  );
};

export default Admin;
