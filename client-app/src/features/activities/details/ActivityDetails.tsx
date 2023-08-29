import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function ActivityDetails() {
    const { activityStore } = useStore();
    const { selectedActivity: activity, openForm, cancelSelectedActivity } = activityStore;
    const { id, title, description, category } = activity || {};

    return (
        <Card>
            <Image src={`/assets/categoryImages/${category}.jpg`} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span>{description}</span>
                </Card.Meta>
                <Card.Description>{description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button onClick={() => openForm(id)} basic color="blue" content="Edit" />
                    <Button onClick={cancelSelectedActivity} basic color="grey" content="Cancel" />
                </Button.Group>
            </Card.Content>
        </Card>
    );
});