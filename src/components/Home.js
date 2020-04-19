import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
function Home(props){

   const handleClick=(appId)=>{
        if(props.application.find(app=> app.id==appId)){
        
            props.history.push(`/video/${appId}`)
            console.log(props.location, "location",props.match)
        }else{
            alert('No application found')
        }
    }
    return(
        <div className='container'>
            <h1>Welcome to App</h1>
            <table border='1'>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>Show</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.candidates.map(candidate=>{
                                return(
                                    <tr key={candidate.id}>
                                    <td>{candidate.name}</td>
                                    <td><button onClick={()=>{handleClick(candidate.applicationId)}}>Show</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
    candidates:state.candidates,
    application:state.applications
    }
}

export default connect(mapStateToProps)(Home)