import Head from 'next/head'
import React, { useState } from 'react'
import ProductItem from '../components/product/ProductItem'
import { getData } from '../utils/fetchData'

const Home = (props) => {
   const [products, setProducts] = useState(props.products)
   return (
      <div className="home_page">
         <Head>
            <title>Home Page</title>
         </Head>
         <div className="products">
            {products.length === 0 ? (
               <h2>No Products</h2>
            ) : (
               products.map((product) => (
                  <ProductItem
                     key={product._id}
                     product={product}
                     // handleCheck={handleCheck}
                  />
               ))
            )}
         </div>
      </div>
   )
}

export async function getServerSideProps() {
   // console.log({ query })
   const res = await getData('product')
   // console.log({ res })
   return {
      props: {
         products: res.products,
         result: res.result,
      }, // will be passed to the page component as props
   }
}

export default Home
