import { useAppLoading } from "@/hooks/useAppLoading";
import { AppProviders } from "@/providers/AppProviders";
import { AppRouter } from "@/routing/AppRouter";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import '@/i18n/config';

// Single Responsibility: Application entry point and loading orchestration
function App() {
  const isLoading = useAppLoading();

  return (
    <ErrorBoundary>
      <AppProviders>
        <LoadingScreen isVisible={isLoading} />
        {!isLoading && <AppRouter />}
      </AppProviders>
    </ErrorBoundary>
  );
}

export default App;
