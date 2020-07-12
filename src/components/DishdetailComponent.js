import React, {Component} from 'react'
import {Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle} from 'reactstrap'

class DishDetail extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }

    renderDish(dish){
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

    renderComments(dish){
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

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>   
                        {this.renderComments(this.props.dish)}   
                    </div> 
                </div>
            </div>
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