
import SingleProduct from "./singleProduct"



const Products = async () => {

    const res = await fetch('http://localhost:5000/products')
    let data = await res.json()
    // console.log(data);
    return (
        <div className="container  px-5 py-24 mx-auto">
            <div className="flex justify-center items-center flex-wrap m-4">
                {
                    data.map((items, index) =>

                        <SingleProduct
                            items={items}
                            id={items.id}
                            key={index} />
                    )

                }
            </div>
        </div>
    )
}
export default Products