import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers: { GET, POST }, auth } = NextAuth({
	providers: [
		Credentials({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				const email = credentials?.email as string | undefined;
				const password = credentials?.password as string | undefined;

				// Demo-only authentication: replace with real user lookup.
				if (email === "demo@example.com" && password === "demo123") {
					return { id: "1", name: "Demo User", email };
				}
				return null;
			},
		}),
	],
	session: { strategy: "jwt" },
});


