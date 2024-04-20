import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getFirestore, collection, getDoc, addDoc, getDocs, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
import firebaseConfig from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getFavourites(renderFun){
    const favouritesRef = collection(db, 'favourites');
    // console.log('hello')
    const querySnapshot = await getDocs(favouritesRef);
    const faveTrailers = [];
    querySnapshot.forEach((doc) => {
       
        faveTrailers.push(doc.data()); 
    });
    renderFun(faveTrailers);
    }

    async function addFavourite(title){
        
        const fave = addDoc(collection(db, "favourites"), {title});
        return fave;
    }

    async function removeFavourite(userId){
        const favouriteRef = doc(db, 'favourites', userId);
        const reviewDoc = await getDoc(favouriteRef);
        
        if (reviewDoc.exists()) {
            await deleteDoc(favouriteRef);
            console.log("Trailer deleted from favourites successfully");
            return true;
        } else {
            console.log("Favourite not found or you don't have permission to remove it");
            return false;
        }
    }

export {getFavourites, addFavourite, removeFavourite};