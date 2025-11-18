import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useAuthStore } from "@/lib/store";
import { User } from "@/types";

export function useFirebaseAuthListener() {
	const setUser = useAuthStore((state) => state.setUser);
	const setAuthReady = useAuthStore((state) => state.setAuthReady);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
			try {
				if (!fbUser) {
					setUser(null);
					return;
				}

				const profileSnapshot = await getDoc(
					doc(db, "users", fbUser.uid)
				);
				const profile = profileSnapshot.data();

				const mappedUser: User = {
					id: fbUser.uid,
					name: profile?.name ?? fbUser.displayName ?? "",
					email: profile?.email ?? fbUser.email ?? "",
					phone: profile?.phone ?? "",
					profilePicture: profile?.profilePicture ?? "",
				};

				setUser(mappedUser);
			} catch (error) {
				console.error("Failed to sync auth state", error);
				if (auth.currentUser) {
					setUser({
						id: auth.currentUser.uid,
						name: auth.currentUser.displayName ?? "",
						email: auth.currentUser.email ?? "",
						phone: "",
						profilePicture: auth.currentUser.photoURL ?? "",
					});
				} else {
					setUser(null);
				}
			} finally {
				setAuthReady(true);
			}
		});

		return unsubscribe;
	}, [setUser, setAuthReady]);
}
