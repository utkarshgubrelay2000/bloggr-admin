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

<input className="form-check-input" type="text" name="exampleRadios" id="exampleRadios1" placeholder='Title'
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
    <section type="section" className="btn btn-info m-1">
    <div className="form-check">

  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"
    />
   
  <label className="form-check-label" for="exampleRadios1">
    Heading 1
  </label>
</div>
   </section>
   <section type="section" className="btn btn-info m-1">
    <div className="form-check">

  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"
    />
   
  <label className="form-check-label" for="exampleRadios1">
    Heading 2
  </label>
</div>
   </section>
   <section type="section" className="btn btn-info m-1">
    <div className="form-check">

  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"
    />
   
  <label className="form-check-label" for="exampleRadios1">
    Heading 2
  </label>
</div>
   </section>
   <section type="section" className="btn btn-info m-1">
    <div className="form-check">

  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"
   />
   
  <label className="form-check-label" for="exampleRadios1">
    Heading 3
  </label>
</div>
   </section>
   <section type="section" className="btn btn-info m-1">
    <div className="form-check">

  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"
   />
   
  <label className="form-check-label" for="exampleRadios1">
    Heading 4
  </label>
</div>
   </section>
   <section type="section" className="btn btn-info m-1">
    <div className="form-check">

  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"
    />
   
  <label className="form-check-label" for="exampleRadios1">
    Heading 5
  </label>
</div>
   </section>
   <section type="section" className="btn btn-info m-1">
    <div className="form-check">

  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"
   />
   
  <label className="form-check-label" for="exampleRadios1">
   ParaGraph
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
