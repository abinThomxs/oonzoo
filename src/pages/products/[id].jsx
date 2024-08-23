import React from "react";
import Head from "next/head";
import Image from "next/image";
import ProductDetails from "@/components/ProductDetails";
import logo from "@/assets/logo.png";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();
  return {
    props: { product }, // product has all the required details for each id
  };
}

const ProductPage = ({ product }) => {
  return (
    <>
      <Head>
        <title>{product.title}</title>
        <link 
          rel="shortcut icon"
          href={
            "https://oonzoo.ae/wp-content/uploads/2023/01/OONZOO-LOGO-1024x309.png"
          }
          type="image/x-icon"
        />
       <meta name='description' content={product?.description} />
        <meta name='og:title' content={product?.title} />
        <meta name='og:description' content={product?.description} />
        <meta name='og:image' content={product?.image} />

        <meta property='og:type' content='website' />
        <meta property='og:image:width' content='250' />
        <meta property='og:image:height' content='141' />
      </Head>
      <div className="bg-black min-h-screen">
        <div className="w-full h-[10%] flex justify-center">
          <Image
            src={logo}
            alt="logo"
            className="w-[150px] sm:w-[180px] md:w-[200px] mt-6"
            width={200}
            height={500}
          />
        </div>

        <ProductDetails product={product} />
      </div>
    </>
  );
};

export default ProductPage;
