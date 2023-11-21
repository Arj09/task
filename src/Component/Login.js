import React, { useState } from 'react'
import {Box, styled} from '@mui/material'





const Form = styled('form')(({theme})=>({
    width:"25vw",
    display:"flex",
    flexDirection:"column",
    margin:"20px auto",
    justifyContent:"center",
    alignItems:"center",
    border:"0.2px solid pink",
    padding:"10px",
    gap:"10px 5px",
    marginTop:"180px",
   
    borderRadius:"3px"

}))
export const Login = ()=>{
    const [show, setShow] = useState(true)

    const handleShow = ()=>{
        show ? setShow(false) : setShow(true)
    }


    return(
        <>
        {
            show ? (

                <Form>
                    <text style={{textAlign:'center', paddingTop:"20px", paddingBottom:"30px", fontSize:"30px"}}>MernStack</text>
                    <input type='email' style={{width:"90%" , padding:"10px  10px",  borderRadius:"3px" }} placeholder='Enter email' />
                    <input type='password' style={{width:"90%" , padding:"10px  10px",  borderRadius:"3px"}} placeholder='Enter password' />
                    <button style={{backgroundColor:"blue" , border:"0.2px solid blue", padding:"10px 10px", cursor:"pointer" , borderRadius:"2px",color:"white", width:"95%"}}>Login</button>
                    <text style={{cursor:"pointer" , paddingBottom:"50px"}} onClick={handleShow}> If you are new sign in</text>
                </Form>
            ) : (

                
                <Form>
                    <text style={{textAlign:'center', paddingTop:"20px", paddingBottom:"30px", fontSize:"30px"}}>MernStack</text>
                    <input type='text' style={{width:"90%" , padding:"10px  10px",  borderRadius:"3px" }} placeholder='Enter name' />
                    <input type='email' style={{width:"90%" , padding:"10px  10px",  borderRadius:"3px" }} placeholder='Enter email' />
                    <input type='password' style={{width:"90%" , padding:"10px  10px",  borderRadius:"3px"}} placeholder='Enter password' />
                    <button style={{backgroundColor:"blue" , border:"0.2px solid blue", padding:"10px 10px", cursor:"pointer" , borderRadius:"2px",color:"white", width:"95%"}}>Login</button>
                    <text style={{cursor:"pointer" , paddingBottom:"50px"}} onClick={handleShow}> If you already user login</text>
                </Form>
            )
        }
        

        


        
        
        
        
        
        </>
    )
}