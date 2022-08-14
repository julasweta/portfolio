import { set } from "mongoose";
import "./modal.scss";
import { useState, useEffect } from "react";
import { FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Modalmy = (props) => {
  const [show, setShow] = useState(true);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [site, setSite] = useState("");
  const [res, setRes] = useState("");
  const [resName, setResName] = useState("");


  useEffect(() => {
    showErrorName()
  },[res, resName]);

  const showErrorName = () => {
    let divErrorName = document.querySelector(".result-name");
    divErrorName.innerText = resName;
     let divErrorPhone = document.querySelector(".result-phone");
     divErrorPhone.innerText = res;
}


  const handleClose = () => {
    const regText = /^\d+$/;
    const regNumb = /^\d+$/;

    if (name.length < 2 || regText.test(name)) {
      setShow(show => true)
      setResName(resName => `Перевірте дані виділені червоним кольором\n`)
       showErrorName();
      let inputName = document.querySelector(".form-name");
      inputName.style.color = "red";
      inputName.addEventListener("input", (e) => {
        console.log(e.target.value.length > 2 && !regText.test(e.target.value));
        if (e.target.value.length > 2 && !regText.test(e.target.value)) {
          inputName.style.color = "grey";
          setResName(resName => ``);
           showErrorName();
        }
      });
    }

    if (phone.length < 6 || !regNumb.test(phone)) {
      setShow((show) => true);
      setRes((res) => `Ви ввели некоректний номер телефону \n`);
       showErrorName();
      let inputPhone = document.querySelector(".form-phone");
      inputPhone.style.color = "red";
      inputPhone.addEventListener("input", (e) => {
        if (e.target.value.length >= 6 && regNumb.test(e.target.value)) {
          inputPhone.style.color = "grey";
          setRes((res) => ``);
           showErrorName();
        }
      });
    } else {
      setShow((show) => false);
      /* Відправлення даних в Гугл форму */
       let http = new XMLHttpRequest();
       let url =
         "https://script.google.com/macros/s/AKfycbx4e-pmSXOxl7DddOz7V_zwylQBHQ-D0lIK2qFGjMQLK6tnulHgaSPepr1LslNnlKu5/exec?";
       let params =
         "&p1=" + phone + "&p2=" + name + "&p3=" + phone + "&p4=" + site;
       http.open("GET", url + "?" + params, true);
       http.onreadystatechange = function () {
         if (http.readyState == 4 && http.status == 200) {
           //alert(http.responseText);
         }
       };
       http.send(null); 

      /*  */
    }
  };

  const nameValue = (e) => {
    const value = e.target.value;
    setName((name) => value);
  };

  const phoneValue = (e) => {
    const value = e.target.value;
    setPhone((phone) => value);
  };

  const siteValue = (e) => {
    const value = e.target.value;
    setSite((site) => value);
  };

  /*  */

  /*   */

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
          <Form className="formGoogle">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="result-name result"></div>
              <div className="result-phone result"></div>
              <Form.Label>Ваше ім'я</Form.Label>{" "}
              <Form.Control
                type="text"
                value={name}
                placeholder="Ім'я"
                onChange={nameValue}
                className="form-name"
                autoFocus
              />
            </Form.Group>{" "}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ваш номер телефону</Form.Label>
              <Form.Control
                type="tell"
                value={phone}
                placeholder="Телефон"
                className="form-phone"
                onChange={phoneValue}
              />
            </Form.Group>{" "}
            <FormGroup>
              <label>
                Виберіть формат сайту Ви розглядаєте:
                <select onChange={siteValue}>
                  <option value="Corporate">Корпоративний</option>
                  <option value="CardSite">Сайт Візитка</option>
                  <option value="Landing">Landing</option>
                </select>
              </label>
            </FormGroup>
          </Form>{" "}
        </Modal.Body>{" "}
        <Modal.Footer>
          {" "}
          <Button variant="secondary" onClick={handleClose}>
            {" "}
            Close{" "}
          </Button>{" "}
          <Button variant="primary" onClick={handleClose}>
            {" "}
            Відправити{" "}
          </Button>{" "}
        </Modal.Footer>{" "}
      </Modal>{" "}
    </>
  );
};;

export default Modalmy;
