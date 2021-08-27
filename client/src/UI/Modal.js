import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 990;
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 995;
  background: rgba(0, 0, 0, 0.5);
`;
const Content = styled.div`
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90%;
  overflow: auto;
  background: #fff;
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  width: 520px; /* This just a default width */
`;

const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  font-size: 18px;
  opacity: 0.5;
  background: none;
  border: none;
  transition: opacity 0.5s ease;
  padding: 1px 10px 3px 10px;
  border-radius: 50%;
  font-size: 1.5rem;
  &:hover {
    background-color: lightgray;
    color: black;
    opacity: 0.2s ease;
  }
`;

const Modal = ({ children, customClass, show, closeCallback }) => (
  <ModalWrapper
    // className={`modal ${customClass}`}
    style={{ display: show ? "block" : "none" }}
  >
    <Overlay onClick={closeCallback}></Overlay>
    <Content>
      {children}
      <CloseButton title="Close" onClick={closeCallback}>
        x{/* <i className="fas fa-times"></i> */}
      </CloseButton>
    </Content>
  </ModalWrapper>
);

export default Modal;
