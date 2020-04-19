import axios from '../config/axios'

export const setCandidate=(candidates)=>{
    return {
        type:'LIST_CANDIDATE',
        payload:candidates
    }
}

export const setQuestion=(questions)=>{
    return {
        type:'LIST_QUESTION',
        payload:questions
    }
}


export const setApplication=(applications)=>{
    return {
        type:'LIST_APPLICATION',
        payload:applications
    }
}



export const StartGetCandidates=()=>{
    return(dispatch)=>{
        axios.get(`/candidates`)
        .then(response =>{
            const candidates=response.data
            dispatch(setCandidate(candidates))
            })

        }
    }

    export const StartGetQuestions=()=>{
        return(dispatch)=>{
            axios.get(`/questions`)
            .then(response =>{
                const questions=response.data
                dispatch(setQuestion(questions))
                })
    
            }
        }


        export const StartGetApplication=()=>{
            return(dispatch)=>{
                axios.get(`/applications`)
                .then(response =>{
                    const applications=response.data
                    dispatch(setApplication(applications))
                    })
        
                }
            }

    
            export const setComment=(data,id)=>{
                return(dispatch)=>{
                    axios.post(`/applications/${id}`,data)
                    .then(response =>{
                        const comment=response.data
                        
                        })
            
                    }
                }