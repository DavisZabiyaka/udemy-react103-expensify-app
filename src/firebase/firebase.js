// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getDatabase, off, onChildAdded, onChildChanged, onChildRemoved, onValue, get, push, ref, remove, set, update } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getDatabase();

export { initializeApp, getAnalytics, getDatabase, off, onChildAdded, onChildChanged, onChildRemoved, get, onValue, push, ref, remove, set, update, database };

/*onChildRemoved(ref(database, 'expenses'), (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

onChildChanged(ref(database, 'expenses'), (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

onChildAdded(ref(database, 'expenses'), (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});*/



/*onValue(ref(database, 'expenses'), (snapshot) => {
    const expenses = [];

    snapshot.forEach((childSnapShot) => {
        expenses.push({
            id: childSnapShot.key,
            ...childSnapShot.val()
        });
    });
    console.log(expenses);
});*/

/*push(ref(database, 'expenses'), {
    description: 'Tennis',
    note: '',
    amount: 1200,
    createdAt: 32432423423
});*/

/*update(ref(database, 'notes/-MzImAcaVFma2x8d8ftc'), {
    body: 'Buy food'
});*/

/*push(ref(database, 'notes'), {
    title: 'To Do',
    body: 'Go for a run'
});*/

/*const firebaseNotes = {
    notes: {
        apoisdf: {
            title: 'First note!',
            body: 'This is my note'
        },
        12: {
            title: 'Second note!',
            body: 'This is my second note'
        }
    }
};

const notes = [
    {
        id: '12',
        title: 'First Note!',
        body: 'This is my note'
    },
    {
        id: '761sea',
        title: 'Another note',
        body: 'This is another note'
    }
];*/

//set(ref(database, 'notes'), notes);

/*onValue(ref(database), (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
}, (e) => {
    console.log('Error with data fetching', e);
});*/

/*const onValueChange = onValue(ref(database), (snapshot) => {
    const data = snapshot.val();
    console.log(data);
}, (e) => {
    console.log('Error with data fetching', e);
});

setTimeout(() => {
    set(ref(database, 'age'), 28);
}, 3500);

setTimeout(() => {
    set(ref(database, 'age'), 29);
}, 7000);

setTimeout(() => {
    off(ref(database), onValueChange());
}, 10500);

setTimeout(() => {
    set(ref(database, 'age'), 30);
}, 14000);*/


/*set(ref(database), {
    name: 'Davis Zabiyaka',
    age: 27,
    stressLevel: 6,
    job: {
        title: 'Software Developer',
        company: 'Google'
    },
    location: {
        city: 'New York',
        state: 'NY',
        country: 'United States'
    }
}).then(() => {
    console.log('Data is saved.');
}).catch((e) => {
    console.log('This failed.', e);
});*/

/*set(ref(database, 'attributes'), {
    height: 71,
    weight: 185
}).then(() => {
    console.log('Second set call worked.');
}).catch((e) => {
    console.log('Things did not work for the second error', e);
});*/

/*update(ref(database), {
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle',
    'location/state': 'WA'
});*/
/*
set(ref(database),
    'This is my data'
);*/

/*
remove(ref(database, 'isSingle')).then(() => {
    console.log('Removed isSingle');
}).catch((e) => {
    console.log('Could not remove isSingle', e);
});*/
