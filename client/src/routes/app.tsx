import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "../components/header/header.tsx";
import styles from "./app.module.css";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={styles.main}>
        <Header />
      </main>
    </QueryClientProvider>
  );
};
