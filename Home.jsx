import ProductCard from"../Component/ProductCard"
import{getProducts}from"../Data/Products";

export default  function Home(){
    const products=getProducts();
  return(
    <div className="page">
        <div className="home-hero">
            <h1 className="home-title"> Welcome to Shophub</h1>
            <p className="home-subtitle"> Discover amazing products at great prices   
            </p>
            <div className="container"></div>
            <h2 className="page-title">Our products</h2>
            <div className="product-grid">
                {products.map((product)=>(
                    <ProductCard product={product} key={product.id}/>
                    
                ))}

            </div>
        </div>
    </div>
  )}
