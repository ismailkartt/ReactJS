import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

const Form3 = () => {

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phone:""
    })

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3 mt-3">
          <Form.Label>isim</Form.Label>
            <Form.Control
              type="text"
              placeholder="Adınızı Giriniz"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Soyisim</Form.Label>
            <Form.Control
              type="text"
              placeholder="Soyadınızı Giriniz"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Epostanızı Giriniz"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
        </Form.Group>
        <Form.Group>
          <Form.Label>Telefon</Form.Label>
            <Form.Control
              type="text"
              placeholder="Telefonunuzu Giriniz"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Form3;
