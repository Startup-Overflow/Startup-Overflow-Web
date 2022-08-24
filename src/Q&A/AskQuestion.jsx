import './AskQuestion.css';
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {useState} from 'react';




const AskQuestion = () => {
  const [text,setText]=useState('');
  const [question,setQuestion] =useState('')
  const[textarea,setTextarea]= useState('');
  const [hashtag,setHashtag] = useState('')

  const addQuestionHandler = () => {
    const data = {};
    data.question = question;
    data.textarea = textarea;
    data.description = text;
    data.hashtag = hashtag;
    console.log(data);
    setText('')
    setQuestion('')
    setTextarea('')
    setHashtag('')
  }
  return <div style={{margin:"20px"}}><div style={{textAlign:"center", marginBottom:"20px"}}>
  Ask
  <span style={{color:'#3e7ddb'}}> Question</span>
</div>
<input type="text" placeholder='enter your question here' value={question} className='post-title' 
onChange={(e)=>{
setQuestion(e.target.value);
}}

/>
<div className='short-description'>
  <textarea placeholder='enter short description of the question here' style={{height:"10vh", width:"79vw",
  resize:"none",borderRadius:'0.5rem',padding:"10px",fontSize:'1.2rem',
  outline:"none"}} className='short-textarea' value={textarea}
  onChange={(e)=>{
    setTextarea(e.target.value);
  }}
  /></div>
  <div style={{margin:"auto", width:"80vw", marginTop:"20px"}}>                     <CKEditor
                    editor={ClassicEditor}
                    data={text}
                    onChange={(event, editor) => {
                        const data = editor.getData()
                        setText(data)
                    }}
                    /></div>
 
   <input
        placeholder="Add Some Hashtags"
        type="text"
        className="post-title hashtag"
        style={{fontSize:"1rem"}}
        value={hashtag}
        onChange= {(e)=>{
          setHashtag(e.target.value)
        }}
      />
<div style={{  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', margin:"30px"}}>
<button onClick={addQuestionHandler} style={{color:"#3e7ddb", fontWeight:"bold", borderRadius:"0.5rem" 
,backgroundColor:"#f0f9ff" , border:"1px solid #3e7ddb" ,padding:"1.2rem", fontSize:"1.2rem"
}}>Add Question</button>
</div>
 
</div>
}

export default AskQuestion;