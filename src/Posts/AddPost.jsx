import {useState} from 'react'

import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const AddPost = () => {

    const [title,setTitle] = useState('');
    const [shortdesc,setShortdesc] = useState('');
    const [desc,setDesc] = useState('');
    const [hash,setHash] = useState('');

    const addPostHandler = () => {
        const pData = {};
        pData.shortdesc = shortdesc;
        pData.desc = desc;
        pData.title = title;
        pData.hash = hash;
        console.log(pData);
        setTitle('');
        setShortdesc('');
        setDesc('');
        setHash('');
    }
return  <div>
<h2 style={{textAlign:"center"}}>Add Your <span style={{color:'#3e7ddb'}}>Post</span>  Here</h2>
<input type="text" placeholder='enter your title here' value={title} className='post-title' 
onChange={(e)=>{
setTitle(e.target.value);
}}/>
<div className='short-description'>
  <textarea placeholder='enter short description of the title here' style={{height:"10vh", width:"80vw",
  resize:"none",borderRadius:'0.5rem',padding:"10px",fontSize:'1.2rem',
  outline:"none"}} className='short-textarea' value={shortdesc}
  onChange={(e)=>{
    setShortdesc(e.target.value);
  }}
  /></div>
  <div style={{margin:"auto", width:"80vw", marginTop:"20px"}}>                     <CKEditor
                    editor={ClassicEditor}
                    data={desc}
                    onChange={(event, editor) => {
                        const data = editor.getData()
                        setDesc(data)
                    }}
                    /></div>
         <input
        placeholder="Add Some Hashtags"
        type="text"
        className="post-title hashtag"
        style={{fontSize:"1rem"}}
        value={hash}
        onChange= {(e)=>{
          setHash(e.target.value)
        }}
      />
      <div style={{  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', margin:"30px"}}>
<button onClick={addPostHandler} style={{color:"#3e7ddb", fontWeight:"bold", borderRadius:"0.5rem" 
,backgroundColor:"#f0f9ff" , border:"1px solid #3e7ddb" ,padding:"1.2rem", fontSize:"1.2rem"
}}>Add Posts</button>
</div>              
</div>
}
export default AddPost ;