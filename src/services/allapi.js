import { commonAPI} from "./commonapi"
import { serverurl } from "./serverurl"


//add message
export const messageAPI = async (reqBody)=>{
    return await commonAPI('POST', `${serverurl}/add-mesage`, reqBody, "")
}

// get message
export const getmessage = async()=>{
    return await commonAPI(`GET`, `${serverurl}/messages`)
}

// delete user mesage
export const removedataapi = async (_id)=>{
    return await commonAPI("DELETE", `${serverurl}/remove-message/${_id}` , {})
}

//Add news

export const addnewsapi = async (reqBody, reqHeader) => {
    return await commonAPI('POST', `${serverurl}/add-news`, reqBody, reqHeader)
  }
  

  //get all news
export const getAllnewsAPI = async ( reqHeader)=>{
    return await commonAPI(`GET`, `${serverurl}/all-news`, "" , reqHeader)
}



//Update news
export const updatenewsAPI = async(id, reqBody, reqHeader)=>{
    return await commonAPI("PUT", `${serverurl}/update-news/${id}`, reqBody, reqHeader)
}