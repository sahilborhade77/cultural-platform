"use client";

import React from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function ProfilePage(): JSX.Element {
	const { data: session, status } = useSession();

	if (status === "loading") {
		return (
			<main style={{ display: "grid", placeItems: "center", minHeight: "60vh" }}>
				<p>Loading...</p>
			</main>
		);
	}

	if (!session) {
		return (
			<main style={{ display: "grid", placeItems: "center", minHeight: "60vh" }}>
				<p>You're not signed in.</p>
				<Link href="/login">Go to Login</Link>
			</main>
		);
	}

	return (
		<main style={{ display: "grid", placeItems: "center", minHeight: "60vh", gap: 8 }}>
			<h1>Welcome, {session.user?.name ?? session.user?.email}</h1>
			<button onClick={() => signOut({ callbackUrl: "/login" })}>Sign out</button>
		</main>
	);
}


