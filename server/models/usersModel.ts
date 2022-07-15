// const { Firestore } = require('@google-cloud/firestore');

// Create a new client
// const firestore = new Firestore();

// async function quickstart() {
//     // set
//     let collectionRef = firestore.collection('Users');

//     collectionRef.add({ foo: 'bar' }).then((documentReference: any) => {
//         let firestore = documentReference.firestore;
//         console.log(`Root location for document is ${firestore.formattedName}`);
//     });
//     // get
//     let query = firestore.collection('Users').where('foo', '==', 'bar');

//     query.get().then((querySnapshot: any) => {
//         querySnapshot.forEach((documentSnapshot: any) => {
//             console.log(`Found document at ${documentSnapshot.ref.path}`);
//         });
//     });
// }
// quickstart();

// module.exports = (async function UserModel() {
//     const userRef = db.collection('cities').doc('SF');
//     const doc = await userRef.get();
//     const docRef = doc(db, 'Users');
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//         console.log('Document data:', docSnap.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log('No such document!');
//     }
// })();
