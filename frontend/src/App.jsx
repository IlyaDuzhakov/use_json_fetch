import useJsonFetch from "./useJsonFetch";
import RequestView from "./component/RequestView";

function App() {
  const [data, loading, error] = useJsonFetch(
    "http://localhost:7070/data"
  );

  const [errorData, errorLoading, errorError] = useJsonFetch(
    "http://localhost:7070/error"
  );

  const [loadingData, loadingLoading, loadingError] = useJsonFetch(
    "http://localhost:7070/loading"
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
