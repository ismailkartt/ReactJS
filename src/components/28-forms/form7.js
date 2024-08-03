import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import * as Yup from "yup";

const Form7 = () => {
  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Geçerli bir eposta giriniz")
      .required("Epostanızı giriniz"),
    password: Yup.string().required("Şifrenizi giriniz"),
  });

  const onSubmit = async (values) => {
    try {
      const resp = await axios.post("https://carrental-v3-backend.herokuapp.com/login",values);
      localStorage.setItem("token",resp.data.token);

    } catch (error) {
      console.log(error)
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Container className="mt-5">
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          {/* <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={() => formik.handleChange("email")}
            value={values.formik.email}
          /> */}
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...formik.getFieldProps("email")}
            isInvalid={formik.touched.email && !!formik.errors.email}
            isValid={formik.touched.email && !formik.errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...formik.getFieldProps("password")}
            isInvalid={formik.touched.password && !!formik.errors.password}
            isValid={formik.touched.password && !formik.errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Remember"
            {...formik.getFieldProps("remember")}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Form7;
