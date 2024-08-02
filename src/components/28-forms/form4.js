import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

const Form4 = () => {

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phone:""
    })

    const handleFormData = (e) => { 
        const { name, value} = e.target;
        setFormData({...formData, [name]: value})
     }


  return (
    <Container>
      <Form>
        <Form.Group className="mb-3 mt-3">
          <Form.Label>isim</Form.Label>
            <Form.Control
              name="firstName"
              type="text"
              placeholder="Adınızı Giriniz"
              value={formData.firstName}
              onChange={(e) => handleFormData(e)}
            />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Soyisim</Form.Label>
            <Form.Control
              name="lastName"  
              type="text"
              placeholder="Soyadınızı Giriniz"
              value={formData.lastName}
              onChange={(e) => handleFormData(e)}
            />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Epostanızı Giriniz"
              value={formData.email}
              onChange={(e) => handleFormData(e)}
            />
        </Form.Group>
        <Form.Group>
          <Form.Label>Telefon</Form.Label>
            <Form.Control
              name="phone"
              type="text"
              placeholder="Telefonunuzu Giriniz"
              value={formData.phone}
              onChange={(e) => handleFormData(e)}
            />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Form4;
