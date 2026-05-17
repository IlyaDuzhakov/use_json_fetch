import useJsonFetch from "./useJsonFetch";
import RequestView from "./component/RequestView";

const API_URL = "https://use-json-fetch-backend-evax.onrender.com";

function App() {
  const [data, loading, error] = useJsonFetch(`${API_URL}/data`);

  const [errorData, errorLoading, errorError] = useJsonFetch(`${API_URL}/error`);

  const [loadingData, loadingLoading, loadingError] = useJsonFetch(
    `${API_URL}/loading`
  );

  return (
    <div className="App">
      <RequestView
        title="Успешный запрос"
        data={data}
        loading={loading}
        error={error}
      />

      <RequestView
        title="Ошибка 500"
        data={errorData}
        loading={errorLoading}
        error={errorError}
      />

      <RequestView
        title="Загрузка"
        data={loadingData}
        loading={loadingLoading}
        error={loadingError}
      />
    </div>
  );
}

export default App;