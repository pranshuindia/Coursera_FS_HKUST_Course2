
import {Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import {Link} from "react-router-dom";

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
