import './App.css';
import { Component } from 'react';
import Preview from './component/modal'
export default class admin extends Component  {
  state={
    blogContent:[],
    checkBox:"h1",
    title:"",
    thumbNail:'',
    data:'<h1>hello</h1>',
    editTitle:false,
    showPreview:false,
    titleStyling:{color:'green',textAlign:'center',fontSize:'32px'},
    blogData:"",imageURL:""
  }
  onChangeHandler=(e)=>{
    this.setState({title:e.target.value,editTitle:true,showPreview:false})
  this.forceUpdate()
    
  }
  setTitleStyling=(e)=>{
    let name=e.target.name
    let newStyle;
    
    if(name==='textAlign'){
      console.log(e.target)
      let alignItem;
if(this.state.titleStyling.textAlign==='center'){
  console.log(true)
alignItem='right'
}
else if(this.state.titleStyling.textAlign==='right'){
alignItem='left'
}
else{
  alignItem='center'
}
let alignObject={textAlign:alignItem}
newStyle={...this.state.titleStyling,...alignObject}
console.log(newStyle,alignObject)
this.setState({titleStyling:newStyle})
    }
    else if(name==='fontSize'){
      newStyle={...this.state.titleStyling,fontSize:e.target.value+'px'}
    }
    else{
      let styleObject ={[name]:e.target.value}
     newStyle={...this.state.titleStyling,...styleObject}
      
    }
    this.setState({titleStyling:newStyle})
    this.forceUpdate()

  console.log(newStyle)
  }
titleSubmit=()=>{
  let title=<h1 style={this.state.titleStyling}> {this.state.title}</h1>
  console.log(title)
  this.setState({title:title,editTitle:false,showPreview:true})
}
  checkBoxValue=(e)=>{
    console.log(e.target.value)
    this.setState({checkBox:e.target.value})
    this.forceUpdate()
  }
  setData=()=>{
    let data=`<${this.state.checkBox}>  ${this.state.blogData} </${this.state.checkBox}>`
    console.log(this.state.blogContent)
    let blogContent=[]
    blogContent.push(data)
    let blogData=[...this.state.blogContent,...blogContent]
    this.setState({blogContent:blogData,blogData:""});

  }
  imageAdder=(e)=>{
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    // replace this with your upload preset name
    formData.append('upload_preset', 'pagalworld');
    const options = {
      method: 'POST',
      body: formData,
    };
    
    // replace cloudname with your Cloudinary cloud_name
    return fetch('https://api.Cloudinary.com/v1_1/dvu7miswu/image/upload', options)
      .then(res => res.json())
      .then(res => {
        let data=`<img src=${res.secure_url} width="200px" height="200px" />`
       // console.log(this.state.blogContent)
        let blogContent=[]
        blogContent.push(data)
        let blogData=[...this.state.blogContent,...blogContent]
        this.setState({blogContent:blogData,blogData:""});
        console.log(this.state.blogContent)
      })
      .catch(err => console.log(err));
    // cloudinary.uploader.upload(e.target.files[0], function(error, result) {
    //   console.log(result)})
  }
  imageHandler=(e)=>{
//console.log(e.target.files[0]);
const formData = new FormData();
formData.append('file', e.target.files[0]);
// replace this with your upload preset name
formData.append('upload_preset', 'pagalworld');
const options = {
  method: 'POST',
  body: formData,
};

// replace cloudname with your Cloudinary cloud_name
return fetch('https://api.Cloudinary.com/v1_1/dvu7miswu/image/upload', options)
  .then(res => res.json())
  .then(res => {
    this.setState({imageURL:res.secure_url})
    console.log(res)
  })
  .catch(err => console.log(err));
// cloudinary.uploader.upload(e.target.files[0], function(error, result) {
//   console.log(result)})
  }
  render(){
  return (
    <section className="App">
     
<div className="container">
<nav className="navbar navbar-light bg-dark">
  <a className="navbar-brand" href="#">
    <img src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" loading="lazy"/>
  </a>
  <button type="button"  className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
      Show Preview
    </button>
</nav>
</div>
<div>
  <Preview title={this.state.title} data={this.state.blogContent} thumbImage={this.state.imageURL} />
</div>

<div className='mr-12'> 
<input type='file' onChange={this.imageHandler}/>
{this.state.showPreview?this.state.title:null}
<input className="inputTitle" style={this.state.titleStyling}  type="text" onChange={this.onChangeHandler} name="exampleRadios" id="exampleRadios1" placeholder='Title'
    />
</div>
<div className='titleEditBlock'>
{this.state.editTitle?<div>
      <div className="btn-toolbar editTitleBar container text-center  mt-3" role="toolbar" aria-label="Toolbar with button groups">
  <div className="btn-group mr-2" role="group" aria-label="First group">
  <select name="fontFamily" id="fontFamily" onChange={this.setTitleStyling}>
  <option value='Montserrat", sans-serif'>Montserrat</option>
  <option value="Open Sans">Open Sans</option>
  <option value="Arial">Arial</option>
  <option value="Times New Roman">Times New Roman</option>
</select>
   
    <button type="button" value={600} name='fontWeight'  onClick={this.setTitleStyling} 
    className="btn btn-info">B</button>
    <input type="color" name='color' onChange={this.setTitleStyling}
     placeholder='color' />
    <button type="button" className="btn bg-black" name='textAlign' onClick={this.setTitleStyling}>
    <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" className="bi bi-justify" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
</svg>
    </button>
    <input type="number" name="fontSize" defaultValue="32" onChange={this.setTitleStyling} className="btn fontSize" placeholder='32px'/>
  </div>
 
  
  <div className="btn-group" role="group" aria-label="Third group" style={{float:'right'}}>
    <button type="button" className="cta-btn" onClick={this.titleSubmit}>Done</button>
  </div>
</div>


    </div>:null}</div>
<div className='p-4 m-2'> 

  <div className="row bg-light">
    <div className="col-sm-3">
  
    </div>
    <div className="col-sm-6">
     <input type="text" value={this.state.blogData} onChange={(e)=>this.setState({blogData:e.target.value})}/>
     <button type="button"   onClick={this.setData}  className="btn btn-secondary bg-dark">Done</button>
  
    </div>
    <div className="col-sm-2 " style={{height:'300px',position:'fixed'}}>
    <section type="section" className="btn cta-btn m-1">
    <div className="form-check">

  <input className="form-check-input" onChange={this.checkBoxValue} 
  type="radio" name="exampleRadios" id="exampleRadios1" value="h1"
    />
   
  <label className="form-check-label" for="exampleRadios1">
    Heading 1
  </label>
</div>
   </section>
   <section type="section" className="btn cta-btn m-1">
    <div className="form-check">

   
  <label className="form-check-label" for="exampleRadios1">
  <input className="form-check-input" type="radio" onChange={this.checkBoxValue}  
  name="exampleRadios" id="exampleRadios1" value="h2" 
    />
    Heading 2
  </label>
</div>
   </section>
   <section type="section" className="btn cta-btn m-1">
    <div className="form-check">

  <input className="form-check-input" onChange={this.checkBoxValue} type="radio" name="exampleRadios" id="exampleRadios1" value="h3"
   />
   
  <label className="form-check-label" for="exampleRadios1">
    Heading 3
  </label>
</div>
   </section>
   <section type="section" className="btn cta-btn m-1">
    <div className="form-check">

  <input className="form-check-input" onChange={this.checkBoxValue} type="radio" name="exampleRadios" id="exampleRadios1" value="h4"
   />
   
  <label className="form-check-label" for="exampleRadios1">
    Heading 4
  </label>
</div>
   </section>
   <section type="section" className="btn cta-btn m-1">
    <div className="form-check">

  <input className="form-check-input"onChange={this.checkBoxValue} type="radio" name="exampleRadios" id="exampleRadios1" value="h5"
    />
   
  <label className="form-check-label" for="exampleRadios1">
    Heading 5
  </label>
</div>
   </section>
   <section type="section" className="btn cta-btn m-1">
    <div className="form-check">

  <input className="form-check-input" onChange={this.checkBoxValue} type="radio" name="exampleRadios" id="exampleRadios1" value="p"
   />
   
  <label className="form-check-label" for="exampleRadios1">
   ParaGraph
  </label>
</div>
   </section>
   <section type="section" className="btn cta-btn m-1">
    <div className="form-check">

    <input type="file" className="form-control-file"onChange={this.imageAdder} id="addImageInBlog" style={{display:'none'}}/>
  <label className="form-check-label" for="exampleRadios1" onClick={()=>
  document.getElementById('addImageInBlog').click()
  }>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
  Image
  </label>
</div>
   </section>


    </div>
</div>
</div>
  
  
  
  
    </section>
  ); }
}


