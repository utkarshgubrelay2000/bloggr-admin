import './App.css';
import { Component } from 'react';

export default class admin extends Component  {
  state={
    blogContent:[],
    checkBox:"",
    title:"",
    thumbNail:'',
    editTitle:true,
    showPreview:false,
    titleStyling:{color:'green',textAlign:'center',fontSize:'32px'}
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
  }
  render(){
  return (
    <section className="App">
<div className="container">
<nav className="navbar navbar-light bg-dark">
  <a className="navbar-brand" href="#">
    <img src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" loading="lazy"/>
  </a>
</nav>
</div>
<div className='text-center mr-12'> 
{this.state.showPreview?this.state.title:null}
<input className="inputTitle" style={this.state.titleStyling}  type="text" onChange={this.onChangeHandler} name="exampleRadios" id="exampleRadios1" placeholder='Title'
    />
    {this.state.editTitle?<div>

      <div class="btn-toolbar editTitleBar container text-center  mt-3" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group mr-2" role="group" aria-label="First group">
    <button type="button" value={600} name='fontWeight'  onClick={this.setTitleStyling} class="btn btn-secondary bg-dark">B</button>
    <input type="color" name='color' onChange={this.setTitleStyling}
     class="btn btn-primary" 
     placeholder='color' />
    <button type="button" class="btn bg-black" name='textAlign' onClick={this.setTitleStyling}>
    <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
</svg>
    </button>
    <input type="number" name="fontSize" defaultValue="32" onChange={this.setTitleStyling} class="btn fontSize" placeholder='32px'/>
  </div>
 
  <select name="fontFamily" id="fontFamily" onChange={this.setTitleStyling}>
  <option value='Montserrat", sans-serif'>Montserrat</option>
  <option value="Open Sans">Open Sans</option>
  <option value="Arial">Arial</option>
  <option value="Times New Roman">Times New Roman</option>
</select>
   
  <div class="btn-group" role="group" aria-label="Third group" style={{float:'right'}}>
    <button type="button" class="btn btn-primary" onClick={this.titleSubmit}>Done</button>
  </div>
</div>


    </div>:null}
</div>
<div className='p-4 m-2'> 

  <div className="row bg-light">
    <div className="col-sm-3">
      
    </div>
    <div className="col-sm-6">
     <input type="text" />
   
    </div>
    <div className="col-sm-2 " style={{height:'300px'}}>
    <section type="section" className="btn cta-btn m-1">
    <div className="form-check">

  <input className="form-check-input" onChange={this.checkBoxValue} type="radio" name="exampleRadios" id="exampleRadios1" value="H1"
    />
   
  <label className="form-check-label" for="exampleRadios1">
    Heading 1
  </label>
</div>
   </section>
   <section type="section" className="btn cta-btn m-1">
    <div className="form-check">

  <input className="form-check-input" type="radio" onChange={this.checkBoxValue}  name="exampleRadios" id="exampleRadios1" value="H2"
    />
   
  <label className="form-check-label" for="exampleRadios1">
    Heading 2
  </label>
</div>
   </section>
   <section type="section" className="btn cta-btn m-1">
    <div className="form-check">

  <input className="form-check-input" type="radio" onChange={this.checkBoxValue} name="exampleRadios" id="exampleRadios1" value="H3"
    />
   
  <label className="form-check-label" for="exampleRadios1">
    Heading 2
  </label>
</div>
   </section>
   <section type="section" className="btn cta-btn m-1">
    <div className="form-check">

  <input className="form-check-input" onChange={this.checkBoxValue} type="radio" name="exampleRadios" id="exampleRadios1" value="H3"
   />
   
  <label className="form-check-label" for="exampleRadios1">
    Heading 3
  </label>
</div>
   </section>
   <section type="section" className="btn cta-btn m-1">
    <div className="form-check">

  <input className="form-check-input" onChange={this.checkBoxValue} type="radio" name="exampleRadios" id="exampleRadios1" value="H4"
   />
   
  <label className="form-check-label" for="exampleRadios1">
    Heading 4
  </label>
</div>
   </section>
   <section type="section" className="btn cta-btn m-1">
    <div className="form-check">

  <input className="form-check-input"onChange={this.checkBoxValue} type="radio" name="exampleRadios" id="exampleRadios1" value="H5"
    />
   
  <label className="form-check-label" for="exampleRadios1">
    Heading 5
  </label>
</div>
   </section>
   <section type="section" className="btn cta-btn m-1">
    <div className="form-check">

  <input className="form-check-input" onChange={this.checkBoxValue} type="radio" name="exampleRadios" id="exampleRadios1" value="Para"
   />
   
  <label className="form-check-label" for="exampleRadios1">
   ParaGraph
  </label>
</div>
   </section>

   <section type="section" className="btn cta-btn m-1">
    <div className="form-check">

    <input type="file" class="form-control-file" id="exampleFormControlFile1" style={{display:'none'}}/>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
  <label className="form-check-label" for="exampleRadios1">
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


