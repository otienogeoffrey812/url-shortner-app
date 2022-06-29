import firebase from "../database/firebase";
import { getFirestore, collection, query, where, addDoc, serverTimestamp, getDocs } from 'firebase/firestore';
import { randomString, handleError } from "../utils/Functions";
const db = getFirestore(firebase);

class LinkShortner {
    static shrink = async (req, res) => {
        try {
            const { link } = req.body;
            const code = randomString(6);
   
            await addDoc(collection(db, 'links'), {
                code,
                link,
                created_at: serverTimestamp(),
            });

            res.status(200).send({
                code
            });
        } catch (error) {
            console.log("Error: ", error)
            handleError(error, 500, res);
        }
    }

    static expand = async (req, res) => {
        try {
            const { code } = req.params;

            const q = query(collection(db, 'links'), where("code", "==", code));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                res.status(404).send({
                    expandedLink: "Link not found",
                });
                return;
            }

            const fetchedData = [];

            querySnapshot.forEach((doc) => {
                fetchedData.push(doc.data());
            });

            const expandedLink = fetchedData[0].link;
            res.redirect(301, expandedLink);
        } catch (error) {
            handleError(error, 500, res);
        }
    }
}

export default LinkShortner;
