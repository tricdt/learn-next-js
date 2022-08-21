import React, { useEffect, useRef } from 'react'
import { postData } from '../utils/fetchData'

const paypalBtn = ({ total, address, mobile, state, dispatch }) => {
   const refPaypalBtn = useRef()
   const { auth, cart } = state
   useEffect(() => {
      paypal
         .Buttons({
            style: {
               shape: 'rect',
               color: 'gold',
               layout: 'vertical',
               label: 'paypal',
            },
            // Order is created on the server and the order id is returned
            createOrder: function (data, actions) {
               return actions.order.create({
                  purchase_units: [
                     {
                        description: 'Thanh toán hóa đơn',
                        amount: { currency_code: 'USD', value: total },
                     },
                  ],
               })
            },
            // Finalize the transaction on the server after payer approval
            // onApprove: (data, actions) => {
            //    return actions.order.capture().then(function (orderData) {
            //       postData('order', { address, mobile, cart, total }, auth.token).then((res) => console.log({ res }))
            //    })
            // },
            onApprove: function (data, actions) {
               return actions.order.capture().then(function (orderData) {
                  dispatch({ type: 'NOTIFY', payload: { loading: true } })
                  postData('order', { address, mobile, cart, total }, auth.token).then((res) => {
                     if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: err.message } })
                     dispatch({ type: 'ADD_CART', payload: [] })
                     return dispatch({ type: 'NOTIFY', payload: { success: res.msg } })
                  })

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
   return <div ref={refPaypalBtn}></div>
}

export default paypalBtn

{
   /* <div id="smart-button-container">
      <div style="text-align: center;">
        <div id="paypal-button-container"></div>
      </div>
    </div>
  <script src="https://www.paypal.com/sdk/js?client-id=sb&enable-funding=venmo&currency=USD" data-sdk-integration-source="button-factory"></script>
  <script>
    function initPayPalButton() {
      paypal.Buttons({
        style: {
          shape: 'rect',
          color: 'gold',
          layout: 'vertical',
          label: 'paypal',
          
        },

        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [{"amount":{"currency_code":"USD","value":2}}]
          });
        },

        onApprove: function(data, actions) {
          return actions.order.capture().then(function(orderData) {
            
            // Full available details
            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

            // Show a success message within this page, e.g.
            const element = document.getElementById('paypal-button-container');
            element.innerHTML = '';
            element.innerHTML = '<h3>Thank you for your payment!</h3>';

            // Or go to another URL:  actions.redirect('thank_you.html');
            
          });
        },

        onError: function(err) {
          console.log(err);
        }
      }).render('#paypal-button-container');
    }
    initPayPalButton();
  </script> */
}
