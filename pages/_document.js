import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
   render() {
      return (
         <Html lang="en">
            <Head>
               <meta charset="utf-8" />
               <meta
                  name="description"
                  content="Dev AT E-commerce website with Next.js"
               />
               <link
                  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                  rel="stylesheet"
               ></link>
               <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
               <script src="https://kit.fontawesome.com/a076d05399.js"></script>
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default MyDocument;