import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface Props {
    activity: IActivity;
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
}

export default function ActivityDetails({ activity, cancelSelectActivity, openForm }: Props) {
    const { category, title, description } = activity;

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
                    <Button onClick={() => openForm(activity.id)} basic color="blue" content="Edit" />
                    <Button onClick={cancelSelectActivity} basic color="grey" content="Cancel" />
                </Button.Group>
            </Card.Content>
        </Card>
    );
}
