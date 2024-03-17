"use client";
// import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function TanstackQueryProvider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	//   const [queryClient] = useState(() => new QueryClient());
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default TanstackQueryProvider;
