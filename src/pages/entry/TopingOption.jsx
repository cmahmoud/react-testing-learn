import React from "react";
import { Col } from "react-bootstrap";

export default function TopingOption({ item }) {
    return (
        <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
            <img
                src={`http://localhost/3030${item.imagePath}`}
                alt={`${item.name} toping`}
                style={{ width: "75%" }}
            />
        </Col>
    );
}
