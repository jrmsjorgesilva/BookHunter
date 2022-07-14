interface objFirebaseConfig {
    apiKey: String;
    authDomain: String;
    projectId: String;
    storageBucket: String;
    messagingSenderId: String;
    appId: String;
}

window.addEventListener('load', () => {
    fetch('http://localhost:8000/firebase')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log('dataIn', data);
            var firebaseConfig: objFirebaseConfig = {
                apiKey: data.apiKey,
                authDomain: data.authDomain,
                projectId: data.projectId,
                storageBucket: data.storageBucket,
                messagingSenderId: data.messagingSenderId,
                appId: data.appId
            };
        })
        .catch((err) => {
            console.error(err);
        });
        
});
