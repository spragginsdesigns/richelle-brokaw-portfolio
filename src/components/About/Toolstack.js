import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaCalendarAlt,
  FaCamera,
  FaCameraRetro,
  FaShippingFast,
  FaUserFriends,
} from "react-icons/fa";
import { MdOutlineInventory2, MdOutlinePhotoCamera } from "react-icons/md";
import { AiFillFileExcel, AiOutlineMail } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <MdOutlineInventory2 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaShippingFast />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCalendarAlt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillFileExcel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCamera />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdOutlinePhotoCamera />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCameraRetro />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineMail />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoIosPeople />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaUserFriends />
      </Col>
    </Row>
  );
}

export default Toolstack;
