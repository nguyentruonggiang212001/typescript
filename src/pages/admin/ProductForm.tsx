import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createProduct, editProduct, fetchProductById } from "../../features/products/productAction";
import { IProduct } from "../../interfaces/IProduct";
import { schemaProduct } from "../../schemas/productShema";
import { AppDispatch } from "../../store/store";




const ProductForm = () => {
  const { id } = useParams<{ id: string }>(); 
  const nav = useNavigate();
  const dispatch:AppDispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(schemaProduct),
    defaultValues: {
        title: "",
        price: 0,
        description: "",
    }
  });


   useEffect(() => {
    if (id) {
      const idProduct = Number(id);
      dispatch(fetchProductById(  idProduct ))
        .unwrap()
        .then((data) => reset(data));
    }
  }, [id, dispatch, reset]);

  const handleGetData = async (dataBody:IProduct) => {
    try {
      const isConfirmed = window.confirm(
        id
          ? "Bạn có chắc chắn muốn cập nhật sản phẩm không?"
          : "Bạn có chắc chắn muốn thêm sản phẩm không?"
      );
      if (!isConfirmed) {
        return;
      }
      if (id) {
      const idProduct = Number(id);
        dispatch(editProduct({id:idProduct, product: dataBody}));
        nav("/admin/products");
      } else {
        dispatch(createProduct(dataBody));
        nav("/admin/products");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleReset = () => {
    if (confirm("Bạn có chắc chắn muốn reset các trường?")) {
      reset();
    }
  };


  return (
    <div>
      <h1 className="header-update">{id ? "Cập nhật" : "Thêm mới"} sản phẩm</h1>
      <form onSubmit={handleSubmit((data) => {
        handleGetData(data)
      } )}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Title"
          {...register("title")}
        />
        {errors.title && (
          <p style={{ color: "red" }}>{errors.title?.message}</p>
        )}

        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          placeholder="Price"
          {...register("price", { valueAsNumber: true })}
        />
        {errors.price && (
          <p style={{ color: "red" }}>{errors.price?.message}</p>
        )}

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          placeholder="Description"
          {...register("description")}
          rows={10}
        ></textarea>

        <div className="button-group" style={{ textAlign: "left" }}>
          <button
            type="submit"
            style={{ backgroundColor: "green", marginRight: "5px" }}
          >
            {id ? "Update" : "Add"}
          </button>

          <button
            type="button"
            style={{ backgroundColor: "gray" }}
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
