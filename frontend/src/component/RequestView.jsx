import '../App.css';

export default function RequestView({ title, data, loading, error }) {
  return (
    <div className="wrapper">
      <h3 className="title">{title}</h3>

      {loading && <p>Loading...</p>}

      {error && (
        <p className="error">
          Error: {error.message}
        </p>
      )}

      {data && (
        <pre className="information">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
