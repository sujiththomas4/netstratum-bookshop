import { Card, Button, Row, Col } from "react-bootstrap";
import boyAvatar from "../../assets/images/avatarBoy.png";
import girlAvatar from "../../assets/images/avatarGirl.jpg";
import "./authorCard.css";
import { BsArrowRight, BsDashCircle } from "react-icons/bs";
import { useState } from "react";
const AuthorCard = (props) => {
  const { author, index } = props;
  const [openedCardModel, setOpenedCardModel] = useState(null);
  const toggleCardModel = (mode, id) => {
    setOpenedCardModel("")
    if (mode === "open") {
      setOpenedCardModel(id);
    }
  };
  return (
    <>
      <Card className="cardWrapp_container">
        <div
          className="authorCardBG"
          style={{
            backgroundColor:
              index % 3 == 0
                ? "#5c80a1"
                : index % 2 == 0
                ? "#3a3a3c"
                : "#12a79e",
          }}
        ></div>
        <Card.Body className="cardBody_cus">
          <img
            className="authorCardImg"
            src={author.gender === "male" ? boyAvatar : girlAvatar}
          />
          <Card.Title>{author.author_name}</Card.Title>
          <Card.Text className="cardBodytextDec">{author.about}</Card.Text>
          <Row className="cardBottomWrap">
            <Col className="carddate" xs={8}>
              Last updated : 20/05/2021
            </Col>
            <Col className="cardArrow" xs={4}>
              <BsArrowRight
                className="cardArrowRight"
                onClick={() => toggleCardModel('open',author.id)}
              />
            </Col>
          </Row>
        </Card.Body>
        {openedCardModel === author.id && (
          <div className="cardOnClickDetails">
            <BsDashCircle
              className="cradHoverCloseIcon"
              onClick={() => toggleCardModel()}
            />
          </div>
        )}
      </Card>
    </>
  );
};

export default AuthorCard;
