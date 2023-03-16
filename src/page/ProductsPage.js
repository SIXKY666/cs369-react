import {
  Link,
  Form,
  useLoaderData,
  useSearchParams,
  useSubmit,
} from "react-router-dom";
import { getProducts } from "../productsData";

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
      <li title={e.category}>{e.name}</li>
    </Link>
  ));

  return (
    <>
      <Form id="search-form" role="search">
        <fieldset>
          <legend>Search</legend>
          <input
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
          <input type="reset" onClick={resetSearch} />
        </fieldset>
      </Form>
      <hr />

      {products.length ? (
        <ul className="list-item">{list}</ul>
      ) : (
        "No product available"
      )}
    </>
  );
};

export default ProductsPage;

// export const productsLoader = async () => {
//   const res = await getProducts();
//   return res;
// };
export const productsLoader = async () => {
  const res = await fetch('/products')
  if (!res.ok) {
      throw Error('Could note fetch the products')
  }
  return res;
};
