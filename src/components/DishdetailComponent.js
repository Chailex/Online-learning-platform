import React from 'react'
import {Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle} from 'reactstrap'


    function RenderDish({dish}){
        if(dish != null){
            return(
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>     
            )
        }else{
            return(
                <div></div>
            )
        }
    }

    function RenderComments({dish}){
        if(dish != null){
            return(
                
                    <ul className="list-unstyled">
                        {dish.comments.map((com)=>{
                            return(
                                <li key={com.id}>
                                    <p>{com.comment}</p>
                                    <p>--{com.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))}</p>
                                </li>
                            )
                        })   
                        }
                    </ul>
                   
                
            )
        }else{
            return(
                <div></div>
            )
        }
    }

    const DishDetail = (props) => {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>   
                        <RenderComments dish={props.dish}/>   
                    </div> 
                </div>
            </div>
        )
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