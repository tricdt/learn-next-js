import React, { useContext } from 'react'
import { deleteItem } from '../store/Actions'
import { DataContext } from '../store/GlobalState'

const Modal = () => {
   const { state, dispatch } = useContext(DataContext)
   const { modal, auth } = state

   const handleSubmit = () => {
      if (modal.length !== 0) {
         for (const item of modal) {
            if (item.type === 'ADD_CART') {
               dispatch(deleteItem(item.data, item.id, item.type))
            }

            // if (item.type === 'ADD_USERS') deleteUser(item)

            // if (item.type === 'ADD_CATEGORIES') deleteCategories(item)

            // if (item.type === 'DELETE_PRODUCT') deleteProduct(item)

            dispatch({ type: 'ADD_MODAL', payload: [] })
         }
      }
   }
   return (
      <div
         className="modal fade"
         id="exampleModal"
         tabIndex="-1"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true"
      >
         <div className="modal-dialog">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                     {modal.length !== 0 && modal[0].title}
                  </h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div className="modal-body">Do you want to delete this item?</div>
               <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleSubmit}>
                     Yes
                  </button>
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                     Cancel
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Modal
