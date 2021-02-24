import  React from 'react';
import parse from 'html-react-parser';
export default function Modal(props){
    let reverseArray=props.data
    let all=reverseArray.join()
    let a=all.replaceAll( ',','')
return (
    <>
   
    
    <div className="modal fade" style={{width:'80%',margin:'auto'}} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div>
           {props.title}
              <img src={props.thumbImage} />
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
          { parse(a)}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    </>
)
}