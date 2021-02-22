import logo from './logo.svg';
import './App.css';

function App() {
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

<input className="inputTitle" type="text" name="exampleRadios" id="exampleRadios1" placeholder='Title'
    />
</div>
<div className='p-4 m-2'> 

  <div className="row bg-light">
    <div className="col-sm-3">
      
    </div>
    <div className="col-sm-6">
      One of three columns
    </div>
    <div className="col-sm-2 " style={{height:'300px'}}>
    <section type="section" className="btn cta-btn m-1">
    <div className="form-check">

  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="H1"
    />
   
  <label className="form-check-label" for="exampleRadios1">
    Heading 1
  </label>
</div>
   </section>
   <section type="section" className="btn cta-btn m-1">
    <div className="form-check">

  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="H2"
    />
   
  <label className="form-check-label" for="exampleRadios1">
    Heading 2
  </label>
</div>
   </section>
   <section type="section" className="btn cta-btn m-1">
    <div className="form-check">

  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="H3"
    />
   
  <label className="form-check-label" for="exampleRadios1">
    Heading 2
  </label>
</div>
   </section>
   <section type="section" className="btn cta-btn m-1">
    <div className="form-check">

  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="H3"
   />
   
  <label className="form-check-label" for="exampleRadios1">
    Heading 3
  </label>
</div>
   </section>
   <section type="section" className="btn cta-btn m-1">
    <div className="form-check">

  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="H4"
   />
   
  <label className="form-check-label" for="exampleRadios1">
    Heading 4
  </label>
</div>
   </section>
   <section type="section" className="btn cta-btn m-1">
    <div className="form-check">

  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="H5"
    />
   
  <label className="form-check-label" for="exampleRadios1">
    Heading 5
  </label>
</div>
   </section>
   <section type="section" className="btn cta-btn m-1">
    <div className="form-check">

  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Para"
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
  );
}

export default App;
