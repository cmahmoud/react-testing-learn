import React from "react";
import { Col } from "react-bootstrap";

export default function ScoopOption({ item }) {
    return (
        <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
            <img
                src={`http://localhost/3030${item.imagePath}`}
                alt={`${item.name} scoop`}
                style={{ width: "75%" }}
            />
        </Col>
    );
}
