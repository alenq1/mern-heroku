import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import { withRouter, Link, NavLink } from 'react-router-dom';
import fetchCrudApi from '../actions/fetchCrudApi'
//import {ConnectWS} from '../actions/wsocket';
import {exampleSelector} from '../selectors/exampleSelector'
import socketIOClient from "socket.io-client";
import {sources} from '../settings/config'
import Result from '../components/Result'
import { Card, Spinner, Button} from 'react-bootstrap'
import CardTemplate from '../components/CardTemplate';
import Designer from '../designer/Designer';


const Home = ({fetchCrudApi, result, websocket, history}) => {


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

    
    //const [websocket, setWsStatus] = useState('checking...')
    const [healthCheck, setHealthCheck] = useState('checking...')
    const [homeLoading, sethomeLoading] = useState(false)
    const [backendApiData, setBackendData] = useState('')
    const checkApiHealth = (Url) => {

        if(Url === sources.HealthEndpoint){
            fetch(Url)
            .then((response) => {
                setHealthCheck(response.statusText)
                console.log(healthCheck, "ESTADO DE HEALTHCHECK");
            })
        
            .catch((error) => {setBackendData('error')})
        }
        if(Url === sources.checkApiUrl){
            sethomeLoading(true)
            fetch(Url)
            .then(response => response.json())
            .then(jsonres => {    
                console.log(jsonres, "api response");
                sethomeLoading(false)
                setBackendData(jsonres)
                console.log(backendApiData, "backend api state");
            })
            .catch((error) => {
                sethomeLoading(false)
                setBackendData('error')            
        })
            
            }
    }

    useEffect(() => {   
        //checkWebsocket(sources.WSocket)
//        ConnectWS(sources.WSocket)
        checkApiHealth(sources.HealthEndpoint)        
    }, [])

    return (
        <>
            <h1 style={style.title}>Services Check</h1>            
            <div className='row container-fluid'>                
                <CardTemplate title={'Api Endpoint'}>
                    {   healthCheck === 'OK' ? 
                            <h2 className='text-success'>{healthCheck}</h2> 
                            : 
                            <h2 className='text-danger'>{healthCheck}</h2> 
                    }                    
                
                </CardTemplate>
                <CardTemplate title={'Scheduled Tasks'}>
                            <a className="btn btn-primary mt-2" role="button" href={sources.taskMonitor}>
                                check tasks
                            </a>                    
                    </CardTemplate>
                <CardTemplate title={'Crud Example'}>                    
                            <Button className="btn btn-primary mt-2" onClick={() => history.push('/list')}>
                                go to page
                            </Button>                                                
                </CardTemplate>
                <CardTemplate title={'Users Admin'}>
                                        
                        <Button
                            className="btn btn-primary mt-2" 
                            onClick={() => history.push('/users')}>
                                go to page
                        </Button>                            
                </CardTemplate>
                <CardTemplate title={'Socket/Scraper Example'}>
                        <Button 
                            className="btn btn-primary mt-2" 
                            onClick={() => history.push('/example')}>
                                go to page
                        </Button>                        
                </CardTemplate>
            </div>
            <div className='row container-fluid'>
                <CardTemplate title ={'Websocket State'}>
                    <div style={{display: 'inline-table'}}>
                        {
                        websocket.status === 'connected' ||  websocket.status === 'message received' ? 
                        <h3 className='text-success'>{websocket.status}</h3> 
                            : 
                        <h3 className='text-danger'>{websocket.status}</h3> 
                        }                    
                    </div>
                </CardTemplate>            
                
                <CardTemplate title={'Backend Api request'}>
                    <div style={{width: '65%'}}>
                        <Button className="mt-2"
                                onClick={() => checkApiHealth(sources.checkApiUrl)}>
                            check Request        
                        </Button>    
                        {    
                            !backendApiData.data  &&
                            null                    
                        }        
                        {    
                            homeLoading === true &&
                            <div className='mt-3'>
                                <Card.Header>
                                    <Spinner animation="border" role="status" variant='dark'/>
                                    Loading
                                </Card.Header>
                            </div>
                        }
                        {
                            backendApiData.message && 
                            <Result type='Success' message={JSON.stringify(backendApiData.message, null, 2)}/>                        
                        }
                        
                        {   (backendApiData.error && backendApiData.error.message) &&
                            <Result type='Error' message={backendApiData.error.message}/>
                        }
                    </div>
                </CardTemplate>
                <div>
                    <Designer/>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        result: state.example,
        websocket: state.socketdata
    }
}

export default connect(mapStateToProps, { fetchCrudApi })(withRouter(Home))
