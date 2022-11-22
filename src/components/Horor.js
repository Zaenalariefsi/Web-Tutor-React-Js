import { Card, Container, Row, Col, Image } from "react-bootstrap"
import smileImage from "../assets/images/horor/smile.jpg"
import hidayahImage from "../assets/images/horor/hidayah.jpg"
import kuntiImage from "../assets/images/horor/kunti.jpg"
import ritualImage from "../assets/images/horor/ritual.jpg"

const Horor = () => {
    return(
        <div>
            <Container>
                <br />
                <h1 className="text-white">HOROR MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="horor">
                        <Card className="movieImage">
                            <image scr={smileImage} alt="Smile Movies" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">SMILE</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with natural lead-in to additional content
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Last update 10 mins ago
                                </Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image
                            src={hidayahImage}
                            alt="Hidayah Movies"
                            className="images"
                        />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">
                                HIDAYAH
                            </Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with natural lead-in to additional
                                content
                            </Card.Text>
                            <Card.Text className="text-left">
                                Last updated 7 mins ago
                            </Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image
                            src={kuntiImage}
                            alt="Kunti Movies"
                            className="images"
                        />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">
                                KUNTI
                            </Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with natural lead-in to additional
                                content
                            </Card.Text>
                            <Card.Text className="text-left">
                                Last updated 20 mins ago
                            </Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image
                            src={ritualImage}
                            alt="Ritual Movies"
                            className="images"
                        />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">
                                RITUAL
                            </Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with natural lead-in to additional
                                content
                            </Card.Text>
                            <Card.Text className="text-left">
                                Last updated 1 hours ago
                            </Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Horor