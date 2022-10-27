import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const ProjectsCards = (props) => {
    return (
        <Card>
            {props.children}
            <Card.Body>
                <Card.Title>
                    {props.title}
                </Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ProjectsCards;
