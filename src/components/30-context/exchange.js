import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useContext } from "react";
import TopBar from "./topbar";
import StoreContext from "../../store";
import Content from "./content";

const Exchange = () => {
  const store = useContext(StoreContext);

  return (
    <div>
      <TopBar />
      <Content />
    </div>
  );
};

export default Exchange;
