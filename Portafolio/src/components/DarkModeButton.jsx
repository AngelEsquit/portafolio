function DarkModeButton({ darkMode, setDarkMode }) {
  return (
    <button
        onClick={e => {
            setDarkMode(!darkMode);
            e.currentTarget.blur();
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
  );
}

export default DarkModeButton;