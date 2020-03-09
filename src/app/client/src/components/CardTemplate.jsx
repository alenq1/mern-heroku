import React from 'react'
import { Card, Spinner, Button} from 'react-bootstrap'

const CardTemplate = ({title, children, customStyle}) => {


const style = {
        
    //width: 450,
    margin: 35,
    //marginTop: 100,
    
    title:{
        textAlign: 'center',
        marginTop: 50
    },
    card:{
        display: 'flex',
        justifyContent: 'center',
        marginRight: 35,
        marginLeft: 50,
        marginTop: 50,
        textAlign: 'center'

    },
    
}



    return (
        <Card style={style.card} className="shadow-lg">
            <Card.Header>{title}</Card.Header>
                <Card.Body>                    
                    {children}
                </Card.Body>
        </Card>
    )
}
export default CardTemplate