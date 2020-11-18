import React, {Component} from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

class Dishdetail extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    renderComment(comments) {
        console.log(comments);
        console.log("Rendering Comments");
        if (comments != null) {
            const commentsList = comments.map((comment)=>{
                return (
                    <li key={comment.id}>
                        {comment.comment} <br/> <br/> -- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} <br/> <br/>
                    </li>
                )
            });
            return (
                <ul className={"list-unstyled"}>
                    {commentsList}
                </ul>
            )
        }
        else {
            return (
                <div>

                </div>
            );
        }
    }

    render() {
        if (this.props.dish != null) {
            return (
                <div className={"container"}>
                    <div className={"row"}>
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}/>
                                <CardBody>
                                    <CardTitle>{this.props.dish.name}</CardTitle>
                                    <CardText>{this.props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className={"col-12 col-md-5 m-1"}>
                            <h4>Comments</h4>
                            {this.renderComment(this.props.dish.comments)}
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
}

export default Dishdetail;
