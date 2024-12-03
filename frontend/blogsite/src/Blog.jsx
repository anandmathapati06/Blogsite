import React, { useContext, useEffect } from 'react'
import { Context } from './Context'
import { useParams } from 'react-router-dom';
import axios from 'axios';
function Blog() {

  const {selectedBlog,setSelectedBlog} = useContext(Context)
  
  const {id} = useParams()
  useEffect(()=>{

    async function byids(para){
      
      const result1 = await axios.get(`http://localhost:8000/blogs/${para}`)
      console.log(para)
      
      console.log(result1.data[0])
      setSelectedBlog(result1.data[0])
       
  
    }
    // if(selectedBlog == ""){

      byids(id)
    
  },[])
  
  return (

    
<div className='flex justify-center '>

{selectedBlog != "" ?

<div className=' flex flex-col  h-full text-white border-b py-8 w-[90%]'>
              
<div className='flex justify-between'> 

<a
onClick={()=>{
byids(id)
navigate(`/blog/${selectedBlog.name}/${selectedBlog.id}`)
}}
className='text-[#E0D700] font-bold sm:text-3xl text-xl underline'>{selectedBlog.title}</a>
<p className=' font-bold text-xl '><p className='text-sm'>category</p>{selectedBlog.category}</p>
</div>
<p className='text-[13px] mb-8'>By : {selectedBlog.name}</p>
<img className=' border w-[50%]' src={selectedBlog.img} alt={"no img"} />

<p className='break-words my-5 border p-4 rounded-2xl overflow-hidden '>{selectedBlog.content}</p>
<a href={`mailto:${selectedBlog.mail}`} className='break-words my-5  p-4 rounded-2xl overflow-hidden '>{selectedBlog.mail}</a>

{/* <p className='my-3'>published on : {d}</p> */}
{/* <button onClick={()=>{
byids(id)
navigate(`/blog/${name}/${id}`)
}}>byid</button> */}

</div>
    :
    
    ""
}
</div>
    
  )
}

export default Blog
