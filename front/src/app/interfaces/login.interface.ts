export interface Login {
    user(user: any): unknown
    response: message
    token:string
    message:string

}
 interface message{
    message:string
  
 }