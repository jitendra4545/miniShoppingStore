
let initialState={
    isAuth:false,
    isLoading:false,
    isError:false
}


const reducer=(state=initialState,action)=>{
    const {type,payload}=action
    switch(type){
      
        default:
            return state
    }
 
}


export {reducer}