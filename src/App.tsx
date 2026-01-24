import { useAppLoading } from "@/hooks/useAppLoading";
import { AppProviders } from "@/providers/AppProviders";
import { AppRouter } from "@/routing/AppRouter";
import { LoadingScreen } from "@/components/LoadingScreen";
import '@/i18n/config';

// Single Responsibility: Application entry point and loading orchestration
function App() {
  const isLoading = useAppLoading();

  return (
    <AppProviders>
      <LoadingScreen isVisible={isLoading} />
      {!isLoading && <AppRouter />}
    </AppProviders>
  );
}

export default App;
