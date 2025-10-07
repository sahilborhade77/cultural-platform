"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

type ProvidersProps = {
	children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps): JSX.Element {
	return <SessionProvider>{children}</SessionProvider>;
}


