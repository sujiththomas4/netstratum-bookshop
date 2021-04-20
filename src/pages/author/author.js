import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./author.css";
import { getAuthors } from "../../actions/authorActions";
import AuthorCard from '../../components/authorCard/authorCard';
import {Row,Col,Form,Button} from 'react-bootstrap';
import CommonHeader from '../../components/commonHeader/commonHeader';
import { BsSearch } from "react-icons/bs";
function Author() {
  const { isAuthorized } = useSelector((state) => state.login);
  const { authors } = useSelector((state) => state.author);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuthors());
  }, []);
  return (
    <>
  <CommonHeader title="Hi Admin" />
  <div className="authorHead">
    <div className="authorHead_Title">Authors</div>
    <div className="authorHead_Search">
    <Form.Control className="authorHead_SearchInp" type="text" placeholder="Search for authors" />
    <BsSearch className="authorHead_SearchIcon"/>
    </div>
    <div className="authorHead_Filter">
    <Button className="FilterButton">Filter</Button>
    </div>
  </div>
      <Row className="cardContainer">
      {authors.map((item,index) => (
        <Col key={item.id}>
        <AuthorCard author={item} index={index + 1}/>
        </Col>
      ))}
      </Row>
    </>
  );
}

export default Author;
