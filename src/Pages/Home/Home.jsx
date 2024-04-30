import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
// import DetailsSec from "./DetailsSec";


// import About from "./About";
//import ToogleTheme from "../components/ToogleTheme";


import Product from "../Product/Product";
import Banner from "../../components/Banneer/Banner";
import Facility from "../../components/Facility/Facility";
import About from "../About/About";
import Categories from "../Category/Categories";
import Spinner from "../../components/Spinner/Spinner";
import { AuthContext } from "../../Context/AuthContextProvider";



const Home = () => {
  const [categories, setCategories] = useState();
  const {loading} = useContext(AuthContext) || {};

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  if(loading){
    return <Spinner/>
  }
   //const loadBrands = useLoaderData();
  return (
    <div className="w-[400px] md:w-full">

      <Banner/>
    
      <div className="lg:max-w-screen-xl  lg:mx-auto lg:px-0 px-5">
       
        <div className="liner-container mt-5 flex justify-center border-b-2 border-[rgba(119,119,119,.17)]">
          <h1 className="mb-[-2px] inline-block border-b-2 border-primary pb-3 text-2xl font-bold uppercase">
            Categories
          </h1>
        </div>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-4 my-10">
          {categories?.map((category) => {
            return <Categories key={categories?.id} category={category} />;
          })}
        </div>
        
        <Product className="w-[420px] md:w-full mx-auto"/>

          <Facility/>

          <About/>

      </div>

          
     
    </div>
  );
};

export default Home;