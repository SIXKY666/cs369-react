import {
  Link,
  Form,
  useLoaderData,
  useSearchParams,
  useSubmit,
  redirect,
} from "react-router-dom";
import "../App.css";

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");
  console.log(q);
  const submit = useSubmit();

  const resetSearch = (e) => {
    // we still want the reset form behavior, so do NOT prevent default
    //    e.preventDefault();

    // need to clear the searchParams on the URL
    const param = searchParams.get("q");
    if (param) {
      searchParams.delete("q");
      setSearchParams(searchParams);
    }
  };

  const products = useLoaderData();
  const list = products.map((e) => (
    <Link key={e.id} to={e.id}>
    <li key={e.id} className="w-96 text-md h-10 rounded-sm outline-2 outline-red-700">{e.name}
    </li>
    </Link>   
  ));

  return (
    <div className="container flex flex-col justify-items-center items-center">
      <Form
        className="w-3/5 flex justify-center items-center"
        id="search-form"
        role="search"
      >
        <div className="container-sm flex border-b border-red-700 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            id="q"
            placeholder="Search"
            type="search"
            name="q"
            defaultValue={q}
            onChange={(event) => {
              console.log("target form", event.currentTarget.form);
              submit(event.currentTarget.form);
            }}
          />
          <button className="negative-btn" type="button" onClick={resetSearch}>
            Reset
          </button>
        </div>
      </Form>
      <hr />
      <Form method="post">
      <button className="w-32 positive-btn my-2" type="submit" >
            Add new product
          </button>
      </Form>
      <div className="container-sm flex flex-col items-start">
        {products.length ? (
          <ul className="list-item">{list}</ul>
        ) : (
          "No product available"
        )}
      </div>
    </div>
  );
};

export default ProductsPage;

// export const productsLoader = async () => {
//   const res = await getProducts();
//   return res;
// };
export const productsLoader = async () => {
  const res = await fetch("/products");
  if (!res.ok) {
    throw Error("Could note fetch the products");
  }
  return res;
};
export const action = async() => {
  const genId = () => Math.random().toString(36).substring(2, 9);
  const productId = genId();
  console.log(productId);
  return redirect(`/products/${productId}/new`);
}
