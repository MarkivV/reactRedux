import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Product from "./Product";
import axios from "axios";
import {setProducts} from "../redux/actions/productActions";

const ProductList = () => {
    let api = "https://fakestoreapi.com/products"
    const products = useSelector((state)=>state)
    const dispatch = useDispatch()

    const fetchProducts = async() =>{
        const response = await axios.get(api).catch((err)=>{
            console.log(err)
        })
        dispatch(setProducts(response.data))
    }

    useEffect(()=>{
        fetchProducts()
    }, [])
    console.log("Products: ", products)

    console.log(products)
    return (
        <div className="ui grid container">
            <Product />
        </div>
    );
};

export default ProductList;
