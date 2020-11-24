import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle, Col, Label,
    Modal, ModalBody,
    ModalHeader, Row
} from "reactstrap";
import {Link} from "react-router-dom";
import {Control, Errors, LocalForm} from "react-redux-form";
import React,{Component} from 'react';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class Comment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen:false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    handleSubmit(values) {
        console.log("Current state is : " + JSON.stringify(values));
        alert("Current state is : " + JSON.stringify(values));
        this.toggleModal();
    }

    toggleModal() {
        this.setState({
            isModalOpen : !this.state.isModalOpen
        })
    }

    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}>
                                    <span className={"fa fa-pencil"}>
                                        {' '}Submit Comment
                                    </span>
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" xs={12}>
                                    Rating
                                </Label>
                                <Col xs={12}>
                                    <Control.select model=".rating" id="rating" name="rating"
                                                    className="form-control">
                                        <option selected>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="yourname" xs={12}>Your Name</Label>
                                <Col xs={12}>
                                    <Control.text model=".yourname" id="yourname" name="yourname"
                                                  placeholder="Your Name"
                                                  className="form-control"
                                                  validators={{
                                                      required, minLength: minLength(3), maxLength: maxLength(15)
                                                  }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".yourname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" xs={12}>Comment</Label>
                                <Col xs={12}>
                                    <Control.textarea model=".message" id="message" name="message"
                                                      rows="6"
                                                      className="form-control"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col xs={12}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}


function RenderDish({dish}) {
    return (<div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

function RenderComment({comments}) {
    if (comments != null) {
        const commentsList = comments.map((comment) => {
            return (
                <li key={comment.id}>
                    {comment.comment} <br/> <br/> -- {comment.author} , {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit'
                }).format(new Date(Date.parse(comment.date)))} <br/> <br/>
                </li>
            )
        });
        return (
            <ul className={"list-unstyled"}>
                {commentsList}
            </ul>
        )
    } else {
        return (
            <div>

            </div>
        );
    }
}

const Dishdetail = (props) => {
    console.log("Dishdetail render Invoked");
    if (props.dish != null) {
        return (
            <div className={"container"}>
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className={"row"}>
                    <RenderDish dish={props.dish}/>
                    <div className={"col-12 col-md-5 m-1"}>
                        <h4>Comments</h4>
                        <RenderComment comments={props.comments}/>
                        <Comment></Comment>
                    </div>
                </div>
            </div>
        )
    } else
        return (
            <div>

            </div>
        )
}


export default Dishdetail;
