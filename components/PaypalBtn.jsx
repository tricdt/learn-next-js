import React, { useContext, useEffect, useRef } from 'react'
import { updateItem } from '../store/Actions'
import { DataContext } from '../store/GlobalState'
import { patchData } from '../utils/fetchData'

const paypalBtn = ({ order }) => {
   const refPaypalBtn = useRef()
   const { state, dispatch } = useContext(DataContext)
   const { auth, orders } = state
   useEffect(() => {
      paypal
         .Buttons({
            style: {
               shape: 'pill',
               color: 'blue',
               layout: 'vertical',
               label: 'buynow',
            },
            // Order is created on the server and the order id is returned
            createOrder: function (data, actions) {
               return actions.order.create({
                  purchase_units: [
                     {
                        amount: { currency_code: 'USD', value: order.total },
                     },
                  ],
               })
            },

            onApprove: function (data, actions) {
               return actions.order.capture().then(function (details) {
                  console.log('Paypal')
                  dispatch({ type: 'NOTIFY', payload: { loading: true } })
                  patchData(
                     `order/payment/${order._id}`,
                     {
                        paymentId: details.payer.payer_id,
                     },
                     auth.token
                  ).then((res) => {
                     if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })

                     dispatch(
                        updateItem(
                           orders,
                           order._id,
                           {
                              ...order,
                              paid: true,
                              dateOfPayment: details.create_time,
                              paymentId: details.payer.payer_id,
                              method: 'Paypal',
                           },
                           'ADD_ORDERS'
                        )
                     )

                     return dispatch({ type: 'NOTIFY', payload: { success: res.msg } })
                  })
                  // postData('order', { address, mobile, cart, total }, auth.token).then((res) => {
                  //    if (res.err)
                  //       return dispatch({ type: 'NOTIFY', payload: { error: err.message } })
                  //    dispatch({ type: 'ADD_CART', payload: [] })
                  //    return dispatch({ type: 'NOTIFY', payload: { success: res.msg } })
                  // })
                  // Show a success message within this page, e.g.
                  // const element = document.getElementById('paypal-button-container')
                  // element.innerHTML = ''
                  // element.innerHTML = '<h3>Thank you for your payment!</h3>'
                  // Or go to another URL:  actions.redirect('thank_you.html');
               })
            },
         })
         .render(refPaypalBtn.current)
   }, [])
   return <div id="paypal-button-container" ref={refPaypalBtn}></div>
}

export default paypalBtn
