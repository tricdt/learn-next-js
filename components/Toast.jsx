const Toast = ({ msg, handleShow, bgColor }) => {
   return (
      <>
         <div
            className={`position-fixed ${bgColor}`}
            style={{ top: '5px', right: '5px', zIndex: 9, minWidth: '280px' }}
         >
            <div
               id="liveToast"
               className="toast show"
               role="alert"
               // aria-live="assertive"
               // aria-atomic="true"
            >
               <div className={`toast-header ${bgColor} text-light`}>
                  {/* <img src="..." className="rounded me-2" alt="..."> */}
                  <strong className="me-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
                  <button
                     type="button"
                     className="btn-close"
                     // data-dismiss="toast"
                     onClick={handleShow}
                     aria-label="Close"
                  ></button>
               </div>
               <div className="toast-body">{msg.msg}</div>
            </div>
         </div>
      </>
   )
}

export default Toast
