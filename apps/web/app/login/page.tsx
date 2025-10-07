"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage(): JSX.Element {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | null>(null);

	async function handleSubmit(e: React.FormEvent): Promise<void> {
		e.preventDefault();
		setError(null);
		const result = await signIn("credentials", {
			email,
			password,
			redirect: true,
			callbackUrl: "/profile",
		});
		if (result?.error) setError(result.error);
	}

	return (
		<main style={{ display: "grid", placeItems: "center", minHeight: "60vh" }}>
			<form onSubmit={handleSubmit} style={{ display: "grid", gap: 8, minWidth: 280 }}>
				<h1>Login</h1>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<button type="submit">Sign in</button>
				{error && <p style={{ color: "red" }}>{error}</p>}
				<p style={{ color: "#666" }}>Demo: demo@example.com / demo123</p>
			</form>
		</main>
	);
}


