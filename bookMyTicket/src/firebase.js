import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/firebase-firestore'

const app = firebase.initializeApp({
	apiKey: "**",
    authDomain: "book-myticket.firebaseapp.com",
    projectId: "book-myticket",
    storageBucket: "book-myticket.appspot.com",
    messagingSenderId: "**",
    appId: "**"
})

export const auth = app.auth()
export const db = app.firestore()
export default app


// class Firebase {
// 	constructor() {
// 		app.initializeApp(firebaseConfig)
// 		this.auth = app.auth()
// 		this.db = app.firestore()
// 	}

// 	addQuote(quote) {
// 		if(!this.auth.currentUser) {
// 			return alert('Not authorized')
// 		}

// 		return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
// 			quote
// 		})
// 	}

// 	async getCurrentUserQuote() {
// 		const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
// 		return quote.get('quote')
// 	}
// }

// export default new Firebase()
