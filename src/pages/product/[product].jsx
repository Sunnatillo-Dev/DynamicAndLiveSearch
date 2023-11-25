import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {Image, Text} from "@chakra-ui/react";
import axios from "axios";

function Product() {
    let router = useRouter().asPath.slice(9,useRouter().asPath.length)
    let [product,setProduct] = useState({})
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${router}`).then(res=>setProduct(res.data))
    },[router])
    return (
        <div>
            <Image src={product.thumbnail}/>
            <Text>{product.title}</Text>
        </div>
    );
}

export default Product;