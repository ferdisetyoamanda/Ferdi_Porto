import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Homepage from "./pages/Homepage";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
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
  );
};

export default App;
