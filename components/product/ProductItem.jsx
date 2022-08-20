import React, { useContext } from 'react'
import { DataContext } from '../../store/GlobalState'
import Link from 'next/link'
import { addToCart } from '../../store/Actions'

const ProductItem = ({ product, handleCheck }) => {
   const { state, dispatch } = useContext(DataContext)
   const { cart, auth } = state
   const userLink = () => {
      return (
         <>
            <Link href={`product/${product._id}`}>
               <a
                  className="btn btn-info"
                  style={{ marginRight: '5px', flex: 1 }}
               >
                  View
               </a>
            </Link>
            <button
               className="btn btn-success"
               style={{ marginLeft: '5px', flex: 1 }}
               disabled={product.inStock === 0 ? true : false}
               onClick={() => dispatch(addToCart(product, cart))}
            >
               Buy
            </button>
         </>
      )
   }

   const adminLink = () => {
      return (
         <>
            <Link href={`create/${product._id}`}>
               <a
                  className="btn btn-info"
                  style={{ marginRight: '5px', flex: 1 }}
               >
                  Edit
               </a>
            </Link>
            <button
               className="btn btn-danger"
               style={{ marginLeft: '5px', flex: 1 }}
               data-toggle="modal"
               data-target="#exampleModal"
               onClick={() =>
                  dispatch({
                     type: 'ADD_MODAL',
                     payload: [
                        {
                           data: '',
                           id: product._id,
                           title: product.title,
                           type: 'DELETE_PRODUCT',
                        },
                     ],
                  })
               }
            >
               Delete
            </button>
         </>
      )
   }
   return (
      <div
         className="card"
         style={{ backgroundColor: '#ede8e8', width: '18rem' }}
      >
         <div
            className="bg-image hover-overlay ripple"
            data-mdb-ripple-color="light"
         >
            <img
               className="card-img-top"
               src={product.images[0].url}
               alt={product.images[0].url}
            />

            <a href="#!">
               <div
                  className="mask"
                  style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
               ></div>
            </a>
         </div>

         <div className="card-body">
            <h5
               className="card-title text-center text-capitalize"
               title={product.title}
            >
               {product.title}
            </h5>
            <div className="row justify-content-between">
               <h6 className="text-danger">${product.price}</h6>
               {product.inStock > 0 ? (
                  <h6 className="text-danger">In Stock: {product.inStock}</h6>
               ) : (
                  <h6 className="text-danger">Out Stock</h6>
               )}
            </div>
            <p className="card-text" title={product.description}>
               {product.description}
            </p>

            <div className="row justify-content-between mx-0">
               {!auth.user || auth.user.role !== 'admin'
                  ? userLink()
                  : adminLink()}
            </div>
         </div>
         <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
         </div>
      </div>
   )
}

export default ProductItem
