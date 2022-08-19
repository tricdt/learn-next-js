import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
   render() {
      return (
         <Html lang="en">
            <Head>
               <meta
                  name="description"
                  content="Dev AT E-commerce website with Next.js"
               />
               <link
                  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                  rel="stylesheet"
               ></link>
               <link
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                  rel="stylesheet"
               />

               <link
                  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                  rel="stylesheet"
               />

               <link
                  href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.4.0/mdb.min.css"
                  rel="stylesheet"
               />
               <link
                  href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
                  rel="stylesheet"
               />
               <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
               <script src="https://kit.fontawesome.com/a076d05399.js"></script>
               <script
                  type="text/javascript"
                  src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.4.0/mdb.min.js"
               ></script>
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}

export default MyDocument
