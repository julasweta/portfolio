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
    site: 'Corporate',
  });


  const handleClose = () => {
    setShow(!show);
  }
  const [errors, setErrors] = useState({});


  // Функція для обробки введення даних форми
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData( {...formData, [name]: value });
  };

  // Функція для валідації даних форми
  const validateFormData = () => {
    let validationErrors = {};
    if (validator.isEmpty(formData.name)) {
      validationErrors.name = 'Ви не ввели Імя';
    }
    if (!phoneRegex.test(formData.phone)) {
      validationErrors.phone = 'Phone number is invalid';
    }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

    // Функція для обробки подання форми
    const handleSubmit = (event) => {
      event.preventDefault();
      if (validateFormData()) {
        console.log(formData);
        handleClose();
        alert('Дякуємо, очікуйте на дзвінок')
      }
     
    };

    const phoneRegex = /^0\d{2}\d{3}\d{4}$/;

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
                type="tel"
                name = "phone"
                value={formData.phone}
                placeholder="формат - 097 000 00 00"
                className="form-phone"
                onChange={handleInputChange}
              />
            </Form.Group>{" "}
            <FormGroup>
              <label>
                Виберіть формат сайту, який Ви розглядаєте:
                <select onChange={handleInputChange}>
                  <option value="Corporate">Корпоративний</option>
                  <option value="CardSite">Сайт Візитка</option>
                  <option value="Landing">Landing</option>
                </select>
              </label>
            </FormGroup>
            <div style={{color:'red'}}>{errors.phone}</div>
            <div style={{color:'red'}}>{errors.name}</div>
          
            <br></br>
            <Button variant="primary"  type="submit">
            {" "}
            Відправити{" "}
          </Button>{" "}
          </Form>{" "}
        </Modal.Body>{" "}
        <Modal.Footer>
          {" "}
          <Button variant="secondary" onClick={handleClose}>
            {" "}
            Close{" "}
          </Button>{" "}

         
        </Modal.Footer>{" "}
      </Modal>{" "}
    </>
  );
};;

export default Modalmy;
