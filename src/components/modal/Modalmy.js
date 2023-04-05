
import "./modal.scss";
import { useState } from "react";
import { FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { JWT } from 'google-auth-library';
import https from 'https';



const Modalmy = (props) => {
  const [show, setShow] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    site: "Corporate",
    email: "",
  });

  const handleClose = () => {
    setShow(!show);
  };
  const [errors, setErrors] = useState({});

  // Функція для обробки введення даних форми
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const emailRegex = /^\S+@\S+\.\S+$/;

  const validateFormData = () => {
    let validationErrors = {};
    if (!/^([a-zA-Zа-яА-ЯІіЇїЄєҐґ']+){2,}$/.test(formData.name)) {
      validationErrors.name =
        "Ім'я має містити лише літери та бути довшим за 2 символи";
    }

    if (!phoneRegex.test(formData.phone)) {
      validationErrors.phone = "Phone number is invalid";
    }
    if (!emailRegex.test(formData.email)) {
      validationErrors.email = "Email is invalid";
    }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

 

  ////////////
  const SHEET_ID = '1yYNspQE26aoGKAwZajZ_1ea62TzpOMvk3bWaGy-A4kM';
  const SHEET_NAME = 'portfolio';
  
  const spreadsheetId = SHEET_ID;
  const range = `${SHEET_NAME}!A1:C1`;
  
  const sendToGoogleSheets = async (data) => {
    const jwtClient = new JWT({
      email: 'SERVICE_ACCOUNT_EMAIL',
      key: 'SERVICE_ACCOUNT_PRIVATE_KEY',
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
  
    try {
      await jwtClient.authorize();
      const accessToken = jwtClient.credentials.access_token;
  
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED`;
  
      const headers = {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      };
  
      const body = {
        values: [[data.name, data.site, data.email]]
      };
  
      const response = await axios.post(url, body, { headers });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  // Функція для обробки подання форми
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateFormData()) {
      console.log(formData);
      //GOOGLE
      // https://habr.com/ru/company/skillfactory/blog/544866/ - інструкція через інший сайт
      console.log(formData);
  /*     axios.post('https://sheet.best/api/sheets/906b6fa6-8326-417c-bcbc-9b3acad382a5', formData)
    .then(response => {
      console.log(response);
    }) */
    sendToGoogleSheets(formData);

      
    
    
      

      handleClose();
      alert("Дякуємо, очікуйте на дзвінок");
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
                name="phone"
                value={formData.phone}
                placeholder="формат - 097 000 00 00"
                className="form-phone"
                onChange={handleInputChange}
              />
            </Form.Group>{" "}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Ваша електронна пошта</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                placeholder="example@gmail.com"
                className="form-email"
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
            <div style={{ color: "red" }}>{errors.phone}</div>
            <div style={{ color: "red" }}>{errors.name}</div>
            <br></br>
            <Button variant="primary" type="submit">
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
};

export default Modalmy;
