import styled from "styled-components";

const Modal = ({ children, estado, cambiarEstado }) => {
  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal>
            {children}
            <ButtonModal onClick={() => cambiarEstado(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </ButtonModal>
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
};

export default Modal;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContenedorModal = styled.div`
  width: 30%;
  height: 60%;
  position: relative;
  border-radius: 5px;
  background: #fff;
  padding: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ButtonModal = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;

  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 10%;
  color: black;

  &:hover {
    background: red;
    transition: 0.3s;
    color: white;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
