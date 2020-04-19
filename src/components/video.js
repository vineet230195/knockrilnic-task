import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setComment} from '../actions/listAction'


class Video extends React.Component{
    constructor(){
        super()
            this.state={
                comment:''
            
        }
    }

    handleChange=(e)=>{
        this.setState({comment:e.target.value})
        const data={comment:this.state.comment}
        const id=this.props.application.id
        this.props.dispatch(setComment(data,id))
    }
    render(){
        const quentioneText = (questionId) => {
        const questionTest = this.props.question.find(qus => qus.id === questionId)
        return questionTest.question
   }
     console.log(this.props)           
    return(
        <div>
            {this.props.application?(
            <div>    
            {this.props.application.videos.map((item,i)=>{
            return <div>
            <video key={i} width="300" height="240" controls>
              <source  src={item.src} type="video/mp4" />
            </video>
            <p>{item.comments}</p>
            <h3>{quentioneText(item.questionId)}</h3>
            <label>Comments</label>
            <textarea value={this.state.comment} onChange={this.handleChange}></textarea><br/>
            <button onClick={this.handleClick}>Save</button>
            
            </div>}
            )}
          </div>
            ):''}
            
           <Link to='/'>Back</Link>
        </div>
    )
  }
}

const mapStateToProps=(state,props)=>{
    const Appid=props.match.params.id
    return {
        application:state.applications.find(app=>app.id==Appid),
        question:state.question
    }
}
export default connect(mapStateToProps)(Video)

/*
*/

