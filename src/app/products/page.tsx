"use client";

import { useAppContext } from "@/context/AppProvider";
import { useRef, useState } from "react";
import styles from "./content.module.sass";
import { addProduct } from "./actions/actions"
import { IProducts } from "@/interface";
import Link from "next/link";

const Content = () => {
  const { respond, setNotification} = useAppContext();
  const formRef = useRef<HTMLFormElement>(null);
  const [isFormOpen, setFormOpen] = useState(false);
  // const [state, action]= useFormState()
  const toggleForm = () => setFormOpen(!isFormOpen);
  const handleFormSubmit = (e: any) => {
    const form = new FormData(formRef.current!);
    const title = form.get("title");
    const description = form.get("desc");
    const price = form.get("price");
    if (!title || !description || !price) {
      setNotification("Warning! the blanks cannot be empty");
    }
  };
  return (
    <div className={styles.productList}>
      <h2 className={styles.title}>Products</h2>
      <button className={styles.addButton} onClick={toggleForm}>
        Add Product
      </button>

      {isFormOpen && (
        <form
          action={addProduct}
          name="form"
          onSubmit={handleFormSubmit}
          ref={formRef}
          className={styles.productForm}
        >
          <input
            type="text"
            placeholder="Title"
            name="title"
            className={styles.input}
          />
          <textarea
            placeholder="Description"
            name="desc"
            className={styles.textarea}
          ></textarea>
          <input
            maxLength={4}
            type="number"
            placeholder="Price"
            name="price"
            className={styles.input}
          />
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      )}

      <div className={styles.productCards}>
        {respond?.map((product, index) => (
          <Link href={`products/${product.id}`} key={index} className={styles.productCard}>
            <h3 className={styles.productTitle}>{product.title}</h3>
            <p className={styles.productDescription}>{product.description}</p>
            <div className={styles.productPrice}>${product.price}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Content;
