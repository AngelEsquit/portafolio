function GitHubStats({ darkMode }) {
  return (
    <section id="github" className="github-stats">
      <h2>GitHub Stats</h2>

      <div className="github-images">
        <img
          src={
            darkMode ? "https://github-readme-stats.vercel.app/api?username=AngelEsquit&show_icons=true&theme=dark"
            : "https://github-readme-stats.vercel.app/api?username=AngelEsquit&show_icons=true&theme=default"}
          alt="GitHub stats"
        />

        <img
          src={
            darkMode ? "https://github-readme-stats.vercel.app/api/top-langs/?username=AngelEsquit&layout=compact&theme=dark"
            : "https://github-readme-stats.vercel.app/api/top-langs/?username=AngelEsquit&layout=compact&theme=default"}
          alt="Top languages"
        />
      </div>
    </section>
  );
}

export default GitHubStats;
