import React from 'react'
import {Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle, BreadcrumbItem, Breadcrumb} from 'reactstrap'
import {Link } from 'react-router-dom'


    function RenderDish({dish}){
            return(<div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card> 
                        </div>    
            )
    }

    function RenderComments({comments}){
        if(comments != null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4> 
                    <ul className="list-unstyled">
                        {/* {comments.map((comment)=>{
                            return( */}
                                <li key={comments.id}>
                                    <p>{comments.comment}</p>
                                    <p>--{comments.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
                                </li>
                            {/* ) */}
                        {/* })   
                        } */}
                    </ul>
                </div>    
            )
        }else{
            return(
                <div></div>
            )
        }
    }

    const DishDetail = (props) => {
        if(props.dish != null)
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish}/>
                    <RenderComments comments={props.comments}/>   
                </div>
            </div>
        );
        else{
            return(
                <div></div>
            )
        }
    }


export default DishDetail;




// renderComments(dish){
//     if (dish != null)
//     {
//         if(dish.comments)
//         {				
//             const comments = dish.comments.map(({id, comment, author, date}) => {

//                 return[<li key={id}>{comment}<br/>-- {author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(date)))}</li>];
//             });
            
//             return(
//                 <div><h4>Comments</h4><ul className="list-unstyled">{comments}</ul></div>
//             );
//         }
//         else
//         {
//             return(
//                 <div></div>
//             );				
//         }
//     }
//     else
//     {
//         return(
//             <div></div>
//         );			
//     }
// };