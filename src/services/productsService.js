import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/config";

// Referencia global a la colección "products"
const productsRef = collection(db, "products");

/* -------------------------------------------------------------------------- */
/*                          TRAER TODOS LOS PRODUCTOS                         */
/* -------------------------------------------------------------------------- */
export const getProducts = async () => {
  try {
    const snapshot = await getDocs(productsRef);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error al traer productos:", error);
    return [];
  }
};

/* -------------------------------------------------------------------------- */
/*                            TRAER PRODUCTO POR ID                           */
/* -------------------------------------------------------------------------- */
export const getProductById = async (id) => {
  try {
    const productRef = doc(db, "products", id);
    const snapshot = await getDoc(productRef);
    if (snapshot.exists()) return { id: snapshot.id, ...snapshot.data() };
    return null;
  } catch (error) {
    console.error("Error al traer producto por ID:", error);
    return null;
  }
};

/* -------------------------------------------------------------------------- */
/*                    TRAER PRODUCTOS (con filtro de categoría)               */
/* -------------------------------------------------------------------------- */
export const getByCategory = async (category) => {
  try {
    const queryRef = category
      ? query(productsRef, where("category", "==", category))
      : productsRef;
    const snapshot = await getDocs(queryRef);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error al filtrar productos:", error);
    return [];
  }
};

/* -------------------------------------------------------------------------- */
/*                              ALTA DE PRODUCTO                              */
/* -------------------------------------------------------------------------- */
export const createProduct = async (productData) => {
  try {
    const docRef = await addDoc(productsRef, productData);
    return docRef.id;
  } catch (error) {
    console.error("Error al crear producto:", error);
    throw error;
  }
};
