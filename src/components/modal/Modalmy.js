import "./modal.scss";
import { useState, useEffect } from "react";
import { FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import validator from 'validator';

const Modalmy = (props) => {
  const [show, setShow] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    site: '',
  });


  const handleClose = () => {
    setShow(!show);
  }
  const [errors, setErrors] = useState({});

    // Початковий стан
    useEffect(() => {
      handleClose()
    }, []);

  // Функція для обробки введення даних форми
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Функція для валідації даних форми
  const validateFormData = () => {
    let validationErrors = {};
    if (validator.isEmpty(formData.name)) {
      validationErrors.name = 'Name is required';
    }
    if (!validator.isEmail(formData.email)) {
      validationErrors.email = 'Please enter a valid email';
    }
    if (!validator.isLength(formData.password, { min: 6 })) {
      validationErrors.password = 'Password must be at least 6 characters';
    }
    if (!validator.equals(formData.password, formData.confirmPassword)) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

    // Функція для обробки подання форми
    const handleSubmit = (event) => {
      event.preventDefault();
      if (validateFormData()) {
        console.log(formData);
      }
    };



  return (
   <>
      <Modal show={show} onHide={handleClose}>
        {" "}
        <Modal.Header closeButton>
          {" "}
          <Modal.Title>Замовити дзвінок</Modal.Title>{" "}
        </Modal.Header>{" "}
        <Modal.Body>
          {" "}
          <Form className="formGoogle" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="result-name result"></div>
              <div className="result-phone result"></div>
              <Form.Label>Ваше ім'я</Form.Label>{" "}
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                placeholder="Ім'я"
                onChange={handleInputChange}
                className="form-name"
                autoFocus
              />
            </Form.Group>{" "}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ваш номер телефону</Form.Label>
              <Form.Control
                type="tell"
                name = "tell"
                value={formData.phone}
                placeholder="Телефон"
                className="form-phone"
                onChange={handleInputChange}
              />
            </Form.Group>{" "}
            <FormGroup>
              <label>
                Виберіть формат сайту Ви розглядаєте:
                <select onChange={handleInputChange}>
                  <option value="Corporate">Корпоративний</option>
                  <option value="CardSite">Сайт Візитка</option>
                  <option value="Landing">Landing</option>
                </select>
              </label>
            </FormGroup>
            {errors.confirmPassword && <div>{errors.confirmPassword}</div>}
          </Form>{" "}
        </Modal.Body>{" "}
        <Modal.Footer>
          {" "}
          <Button variant="secondary" onClick={handleClose}>
            {" "}
            Close{" "}
          </Button>{" "}

          <Button variant="primary"  type="submit">
            {" "}
            Відправити{" "}
          </Button>{" "}
        </Modal.Footer>{" "}
      </Modal>{" "}
    </>
  );
};;

export default Modalmy;
