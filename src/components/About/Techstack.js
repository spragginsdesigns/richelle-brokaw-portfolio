import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaTruckMoving,
  FaCameraRetro,
  FaUsers,
  FaPalette,
  FaRegCalendarAlt,
  FaBriefcaseMedical,
  FaPhotoVideo,
  FaUserNurse,
} from "react-icons/fa";
import {
  MdOutlineEventNote,
  MdLocalShipping,
  MdInventory2,
  MdOutlineSupervisorAccount,
} from "react-icons/md";
import { GiTeamUpgrade, GiBookmarklet } from "react-icons/gi";
import { BiSpreadsheet, BiNetworkChart } from "react-icons/bi";
import { AiOutlineCustomerService, AiOutlineMail } from "react-icons/ai";

function Skillstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaTruckMoving />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdInventory2 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdLocalShipping />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCameraRetro />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaUsers />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiTeamUpgrade />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdOutlineEventNote />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiSpreadsheet />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPalette />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineCustomerService />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBriefcaseMedical />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPhotoVideo />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaUserNurse />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiBookmarklet />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiNetworkChart />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdOutlineSupervisorAccount />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineMail />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRegCalendarAlt />
      </Col>
    </Row>
  );
}

export default Skillstack;
