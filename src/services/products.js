import firestore from "./../firebase";

export const getProducts = async () => {
    // returns CollectionReference
    const collection = firestore.collection("products");
    // query snapshot
    const queryData = await collection.get();
    // query document snapshot
    const documents = queryData.docs;
    // returns an array of objects containing all fields in the document
    const data = documents.map((doc) => ({id: doc.id, ...doc.data()}));
    
    return data;
}

export const getProduct = async (productId) => {
    const data = await getProducts();
    return data.find(product => {
        return product.id === productId;
    });
}

export const updateProduct = async (id, record) => {
    const docRef = firestore.collection("products")
        .doc(id);
    await docRef.update(record);
}