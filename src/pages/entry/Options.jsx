import React from "react";
import ScoopOption from "./ScoopOption";
import { Row } from "react-bootstrap";
import TopingOption from "./TopingOption";

export default function Options({ optionType }) {
    const [items, setItems] = React.useState([]);
    // Get Data from server
    React.useEffect(() => {
        async function getData() {
            await fetch(`http://localhost:3030/${optionType}`)
                .then((response) => response.json())
                .then((data) => setItems(data));
        }
        getData();
    }, [optionType]);
    // Switch between scoop option component or toping option component
    const ItemComponent = optionType === "scoops" ? ScoopOption : TopingOption;
    // Map items to scoop component or toping component
    const itemsData = items.map((item) => (
        <ItemComponent key={item.name} item={item} />
    ));
    return <Row>{itemsData}</Row>;
}
