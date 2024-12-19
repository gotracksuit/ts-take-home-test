import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "../components/header/header.tsx";
import { Insights } from "../components/insights/insights.tsx";
import { useListInsights } from "../queries/useListInsights.ts";
import styles from "./app.module.css";

const queryClient = new QueryClient();

export const App = () => {
  const { data, isPending } = useListInsights();

  return (
    <QueryClientProvider client={queryClient}>
      <main className={styles.main}>
        <Header />
        <Insights className={styles.insights} insights={data} />
      </main>
    </QueryClientProvider>
  );
};
