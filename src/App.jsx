// App.jsx
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Homepage from "./pages/Homepage";
import { LanguageProvider } from "./Context/LanguageContext"; // Sesuaikan dengan path yang benar

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <LanguageProvider>
      <div className="h-screen w-full">
        {!isLoading ? (
          <div className="max-w-screen-xl mx-auto">
            <Homepage />
          </div>
        ) : (
          <div>
            <Loading />
          </div>
        )}
      </div>
    </LanguageProvider>
  );
};

export default App;
