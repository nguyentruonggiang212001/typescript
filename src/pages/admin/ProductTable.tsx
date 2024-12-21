import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { fetchProducts, removeProduct } from "../../features/products/productAction";
import { IProduct } from "../../interfaces/IProduct";
import { Link } from "react-router-dom";




const ProductTable = () => {
 
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useDispatch<AppDispatch>();


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this product?")) {
      dispatch(removeProduct(id));
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
         <h1>Products List</h1>
      <Link to="/admin/products/add">
        <button>Add Product</button>
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length ? (
            products.map((item: IProduct) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                    if(item.id) handleDelete(+item.id)
                    }}  
                  >
                    Delete
                  </button>
                   <Link className="btn btn-warning" to={`/admin/products/update/${item.id}`}>
                    Update
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>
                No Products Available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
