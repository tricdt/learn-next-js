import React, { useEffect, useRef } from 'react'

const paypalBtn = ({ total, address, mobile, state, dispatch }) => {
   const refPaypalBtn = useRef()
   const { cart, auth } = state
   useEffect(() => {
      console.log({ total })

      paypal
         .Buttons({
            // Order is created on the server and the order id is returned
            createOrder: (data, actions) => {
               // This function sets up the details of the transaction, including the amount and line item details.
               return actions.order.create({
                  purchase_units: [
                     {
                        amount: {
                           value: total,
                        },
                     },
                  ],
               })
            },
            // Finalize the transaction on the server after payer approval
            onApprove: (data, actions) => {
               return actions.order.capture().then(function (orderData) {
                  console.log(data)
                  console.log('Capture result', orderData, JSON.stringify(orderData, null, 2))
                  const transaction = orderData.purchase_units[0].payments.captures[0]
                  alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`)
               })
            },
         })
         .render(refPaypalBtn.current)
   }, [])
   return <div ref={refPaypalBtn}></div>
}

export default paypalBtn
