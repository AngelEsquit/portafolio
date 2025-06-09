function Home({ darkMode, setDarkMode }) {
  return (
    <div className="home">
      <button
        onClick={e => {
          setDarkMode(!darkMode);
          e.currentTarget.blur(); // Quita el foco después del click
        }}
        className="toggle-dark"
        aria-label="Cambiar modo oscuro"
      >
        <span style={{ opacity: darkMode ? 0.5 : 1, transition: "opacity 0.3s" }}>☀️</span>
        <span
          className="toggle-thumb"
          style={{
            transform: darkMode ? "translateX(26px)" : "translateX(0)",
          }}
        >
          {darkMode ? "🌙" : "☀️"}
        </span>
        <span style={{ opacity: darkMode ? 1 : 0.5, transition: "opacity 0.3s" }}>🌙</span>
      </button>
      <div className="intro">
        <h1>Hola, soy Angel Esquit</h1>
        <h2>Desarrollador Full Stack en formación</h2>
        <p>Me apasiona crear soluciones completas: desde el frontend elegante hasta un backend funcional y sólido.</p>
        <a href="#sobre-mi" className="btn">Conóceme más</a>
      </div>
    </div>
  );
}

export default Home;