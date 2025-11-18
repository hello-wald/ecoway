import { FirebaseError } from "firebase/app";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	User as FirebaseAuthUser,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db, serverTime } from "@/lib/firebase";
import { LoginCredentials, RegisterCredentials, User } from "@/types";
import { useAuthStore } from "@/lib/store";

type AuthErrors = { errors: Record<string, string> };

function mapFirebaseAuthError(error: unknown): AuthErrors {
	if (error instanceof FirebaseError) {
		switch (error.code) {
			case "auth/email-already-in-use":
				return { errors: { email: "Email already in use" } };
			case "auth/invalid-email":
				return { errors: { email: "Enter a valid email address" } };
			case "auth/invalid-credential":
			case "auth/wrong-password":
				return { errors: { password: "Invalid email or password" } };
			case "auth/user-not-found":
				return { errors: { email: "No account found for this email" } };
			case "auth/weak-password":
				return {
					errors: {
						password: "Password should be at least 6 characters long",
					},
				};
			default:
				return { errors: { general: error.message ?? "Auth error" } };
		}
	}

	return { errors: { general: "Something went wrong. Please try again." } };
}

async function fetchAndStoreUser(user: FirebaseAuthUser) {
	const snapshot = await getDoc(doc(db, "users", user.uid));
	const profile = snapshot.data();

	const mappedUser: User = {
		id: user.uid,
		name: profile?.name ?? user.displayName ?? "",
		email: profile?.email ?? user.email ?? "",
		phone: profile?.phone ?? "",
		profilePicture: profile?.profilePicture ?? user.photoURL ?? "",
	};

	useAuthStore.getState().setUser(mappedUser);
}

export const AuthService = {
	async register(credentials: RegisterCredentials) {
		try {
			const { user } = await createUserWithEmailAndPassword(
				auth,
				credentials.email,
				credentials.password
			);

			await updateProfile(user, { displayName: credentials.name });

			await setDoc(doc(db, "users", user.uid), {
				name: credentials.name,
				email: credentials.email,
				phone: "",
				profilePicture: "",
				createdAt: serverTime(),
				updatedAt: serverTime(),
			});

			await fetchAndStoreUser(user);
			return;
		} catch (error) {
			console.error("Register error", error);
			return mapFirebaseAuthError(error);
		}
	},

	async login(credentials: LoginCredentials) {
		try {
			const { user } = await signInWithEmailAndPassword(
				auth,
				credentials.email,
				credentials.password
			);
			await fetchAndStoreUser(user);
			return;
		} catch (error) {
			console.error("Login error", error);
			return mapFirebaseAuthError(error);
		}
	},
};
