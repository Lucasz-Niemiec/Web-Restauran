///uses
import { useState } from "react";
///
///styles
import {
  Background,
  Wrapper,
  Content,
  Form,
  StyledInput,
  Submit,
  CloseButton,
} from "./Modal.styled";
///
const Modal = ({ openReservtion }) => {
  const [inputs, setInputs] = useState({});
  const [textArea, setTextArea] = useState(
    "please enter any more necessary information"
  );
  console.log(inputs);

  const handleTextArea = (event) => {
    setTextArea(event.target.value);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("tryna send something?");
  };

  return (
    <>
      <Background />
      <Wrapper>
        <CloseButton onClick={openReservtion} />
        <Content>
          <Form onSubmit={handleSubmit}>
            <h1>Reservations</h1>
            <label>
              <h4>Enter yor name*</h4>
              <StyledInput
                type="text"
                name="clientName"
                value={inputs.clientName || ""}
                required
                onChange={handleChange}
              />
            </label>
            <label>
              <h4>Enter number of people*</h4>
              <StyledInput
                type="text"
                name="numberOfGuests"
                value={inputs.numberOfGuests || ""}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              <h4>enter date *</h4>
              <StyledInput
                type="text"
                name="date"
                value={inputs.date || ""}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              <h4>enter your E-mail*</h4>
              <StyledInput
                type="text"
                required
                name="Email"
                value={inputs.Email || ""}
                onChange={handleChange}
              />
            </label>
            <textarea value={textArea} onChange={handleTextArea} />
            <Submit type="submit" value="send" />
          </Form>
        </Content>
      </Wrapper>
    </>
  );
};

export default Modal;
