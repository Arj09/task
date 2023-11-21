import React, { useState } from "react";
import {Box, Typography} from '@mui/material'

export const Navbar = ()=>{

    const [data, setData] = useState([])
    const [Process, setProcessing] = useState([])
    const [completed, setCompleted] = useState([])
    const [action, setAction] = useState({})
   

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setAction(values => ({...values, [name]: value}))
      }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setData(data=>([...data, action]))
        
        setAction({name:""})
       
    }

    const hanldeButton = (index)=>{
        let use = data[index]
        let arr = data;
        arr.splice(index, 1);
        setData([...arr]);

        setProcessing(Process=>([...Process, use]))

    } 


    const hanldeComplete = (index)=>{
        let use = Process[index]
        let arr = Process;
        arr.splice(index, 1);
        setProcessing([...arr]);

        setCompleted(completed=>([...completed, use]))

    } 





    return(
       
        <Box sx={{padding:"20px", margin:"100px auto", border:"0.2px solid pink", width:"60%", display:"flex", flexDirection:"row", justifyContent:"space-between", flexWrap:"wrap"}} >
        
        <Box sx={{width:'25%'}}>
            <Typography sx={{bgcolor:'blue', color:"white", padding:"10px 20px", textAlign:"center"}}>Add Action</Typography>

            <form onSubmit={handleSubmit}>
                <input style={{marginTop:"20px", marginRight:"20px"}}  placeholder="Enter name"  name="name" value={action.name || ""}  onChange={handleChange} required />
                <button>Add</button>
            </form>


            {
                data.map((data, index)=>{
                    return(
                        <Box key={index} sx={{border:"0.2px solid black", padding:"5px 10px", mt:"10px"}}>
                            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                                <Typography>ID: 1256428</Typography>
                                <Typography>12-feb-23</Typography>
                            </Box>
                            <Typography sx={{textAlign:"center"}}>{`User : ${data.name}`}</Typography>
                            <Typography sx={{textAlign:"center"}}>5 Item </Typography>
                            
                            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", padding:"5px"}}>
                                <Typography>Status</Typography>
                                <button onClick={()=>hanldeButton(index)}>Pending</button>
                                
                                
                            </Box>
                
                            
                        </Box>
                        

                    )
                })
            }

            

        </Box>





        <Box sx={{width:'25%'}}>
            <Typography sx={{bgcolor:'blue', color:"white", padding:"10px 20px" , textAlign:"center"}}>Process Action</Typography>
            <Box sx={{ mt:"10px"}}>
                {
                    Process.map((data, index )=>{
                        return(
                            <Box key={index} sx={{border:"0.2px solid black", padding:"5px 10px", mt:"10px"}}>
                            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                                <Typography>ID: 1256428</Typography>
                                <Typography>12-feb-23</Typography>
                            </Box>
                            <Typography sx={{textAlign:"center"}}>{`User : ${data.name}`}</Typography>
                            <Typography sx={{textAlign:"center"}}>5 Item </Typography>
                            
                            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", padding:"5px"}}>
                                <Typography>Status</Typography>
                                <button onClick={()=>hanldeComplete(index)}>Complete</button>
                                
                                
                            </Box>
                
                            
                        </Box>
                        )
                    })
                }
            </Box>
        </Box>



        <Box  sx={{width:'25%'}}>
            <Typography sx={{bgcolor:'blue', color:"white", padding:"10px 20px", textAlign:"center"}}>Complete Action</Typography>
            {
                completed
                .filter((data)=>(data.status == 'done' ? data : 'none'))
                .map((data, index)=>{
                    return(
                        <Box key={index} sx={{border:"0.2px solid black", padding:"5px 10px", mt:"10px"}}>
                            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                                <Typography>ID: 1256428</Typography>
                                <Typography>12-feb-23</Typography>
                            </Box>
                            <Typography sx={{textAlign:"center"}}>{`User : ${data.name}`}</Typography>
                            <Typography sx={{textAlign:"center"}}>5 Item </Typography>
                            
                            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", padding:"5px"}}>
                                <Typography>Status</Typography>
                                <button onClick={()=>hanldeButton(index)}>Check Detail</button>
                                
                                
                            </Box>
                
                            
                        </Box>
                    )

                })
            }
        </Box>


       </Box>
      
    )
}