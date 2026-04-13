import { useState } from "react";

const sportsPages = {
  NBA: {
    status: "Active",
    regular: "Regular season analysis, team form tracking, matchup breakdowns, and evolving prediction tools.",
    playoffs: "Playoff game analysis focused on pressure matchups, momentum, and series-based insight.",
  },
  NFL: {
    status: "Active",
    regular: "Regular season game pages for weekly breakdowns, trends, team form, and matchup research.",
    playoffs: "Playoff and postseason pages built for higher-pressure games, elimination matchups, and deeper analysis.",
  },
  NHL: {
    status: "Coming Soon",
    regular: "Future regular season hockey research, matchup notes, and tracking tools.",
    playoffs: "Future playoff hockey analysis and postseason performance insights.",
  },
  MLB: {
    status: "Coming Soon",
    regular: "Future regular season baseball pages for daily games, team form, and data-based insight.",
    playoffs: "Future postseason baseball analysis for playoff series and high-pressure matchups.",
  },
};

function InfoCard({ title, text }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

export default function App() {
  const [siteMode, setSiteMode] = useState("private");
  const [selectedSport, setSelectedSport] = useState("NBA");
  const accessGranted = siteMode === "public";
  const currentSport = sportsPages[selectedSport];

  return (
    <div className="page">
      <header className="topbar">
        <div className="brand-block">
          <h1>NearPerfectPredictions.com</h1>
          <p>Smarter sports insight built to grow over time</p>
        </div>

        <div className="mode-block">
          <div className="toggle-wrap">
            <button
              onClick={() => setSiteMode("private")}
              className={siteMode === "private" ? "toggle-btn active-light" : "toggle-btn"}
            >
              Private
            </button>
            <button
              onClick={() => setSiteMode("public")}
              className={siteMode === "public" ? "toggle-btn active-cyan" : "toggle-btn"}
            >
              Public
            </button>
          </div>
          <p className="mode-label">
            Current mode: <span>{siteMode}</span>
          </p>
        </div>
      </header>

      {!accessGranted ? (
        <main className="private-screen">
          <div className="private-card">
            <p className="pill-warning">Private website</p>
            <h2>Near Perfect Predictions is currently private.</h2>
            <p>
              This website is hidden right now. When you want people to view it,
              switch the mode to public in the top right.
            </p>

            <div className="notice-box">
              Private mode hides the full website and shows only this message until you
              switch it back to public.
            </div>
          </div>
        </main>
      ) : (
        <>
          <main>
            <section className="hero section two-col">
              <div>
                <p className="pill-cyan">Prediction platform</p>
                <h2>Smarter sports predictions built through data, patterns, and growth.</h2>
                <p className="lead">
                  Near Perfect Predictions is being built as a growing platform for sports
                  insight, analysis, and evolving prediction tools. Each sport now has its
                  own dedicated page section.
                </p>
                <div className="button-row">
                  <a href="#sports" className="btn-primary">View sports pages</a>
                  <a href="#contact" className="btn-secondary">Contact</a>
                </div>
              </div>

              <div className="stack">
                <div className="card">
                  <p className="mini-label">Platform vision</p>
                  <h3>One page for each sport</h3>
                  <p>
                    NBA, NFL, NHL, and MLB each now have their own clean page section so
                    the platform can stay organized and grow naturally.
                  </p>
                </div>

                <div className="grid-two">
                  <div className="card dark">
                    <p className="muted">Current focus</p>
                    <p className="strong">Prediction research</p>
                  </div>
                  <div className="card dark">
                    <p className="muted">Structure</p>
                    <p className="strong">4 sport pages</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="section stripe">
              <div className="container">
                <h3>About Near Perfect Predictions</h3>
                <p className="max-text">
                  Near Perfect Predictions is focused on studying sports data, trends, and
                  performance patterns to better understand outcomes. The goal is to build
                  a platform that keeps improving over time, while staying simple enough to
                  grow step by step.
                </p>
              </div>
            </section>

            <section id="sports" className="section container">
              <div className="section-head">
                <h3>Sport pages</h3>
                <p className="max-text">
                  Each sport now has its own dedicated page section. Inside each one, you
                  can build out regular season games and playoff games separately as the
                  site grows.
                </p>
              </div>

              <div className="toggle-wrap sports-tabs">
                {Object.keys(sportsPages).map((sport) => (
                  <button
                    key={sport}
                    onClick={() => setSelectedSport(sport)}
                    className={selectedSport === sport ? "toggle-btn active-light" : "toggle-btn"}
                  >
                    {sport}
                  </button>
                ))}
              </div>

              <div className="card section-card">
                <div className="section-title-row">
                  <div>
                    <h4>{selectedSport} Page</h4>
                    <p className="muted">Dedicated page structure for {selectedSport}</p>
                  </div>
                  <span className="status-pill">{currentSport.status}</span>
                </div>

                <div className="grid-two">
                  <InfoCard title={`${selectedSport} Regular Season Games`} text={currentSport.regular} />
                  <InfoCard title={`${selectedSport} Playoff Games`} text={currentSport.playoffs} />
                </div>
              </div>
            </section>

            <section className="section container">
              <div className="section-head">
                <h3>Sample game pages</h3>
                <p>
                  These are starter examples showing how a game page can look before live
                  data and automation are added.
                </p>
              </div>

              <div className="grid-two">
                <div className="card">
                  <p className="mini-label">NBA sample page</p>
                  <h4>Lakers vs Suns</h4>
                  <p className="muted top-gap">Prediction</p>
                  <p className="strong">Lakers win probability: 58%</p>
                  <p className="muted top-gap">Reasoning</p>
                  <p>
                    Current form, matchup flow, and lineup strength suggest a slight edge.
                    This section can later include injuries, team trends, and deeper notes.
                  </p>
                  <div className="tag-row">
                    <span className="tag">Regular Season</span>
                    <span className="tag">Game Notes</span>
                    <span className="tag">Prediction</span>
                  </div>
                </div>

                <div className="card">
                  <p className="mini-label">NFL sample page</p>
                  <h4>Chiefs vs Bills</h4>
                  <p className="muted top-gap">Prediction</p>
                  <p className="strong">Chiefs win probability: 54%</p>
                  <p className="muted top-gap">Reasoning</p>
                  <p>
                    Team form, pressure situations, and overall matchup balance point to a
                    close game. This block can later grow into a full breakdown page.
                  </p>
                  <div className="tag-row">
                    <span className="tag">Playoffs</span>
                    <span className="tag">Game Notes</span>
                    <span className="tag">Prediction</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="section container">
              <div className="section-head">
                <h3>What this site is built for</h3>
                <p>
                  The foundation is simple now, but it is designed to support more pages,
                  more sports, and more tools later.
                </p>
              </div>

              <div className="grid-three">
                <InfoCard title="Prediction pages" text="Create sections for game breakdowns, matchup notes, and future prediction tools." />
                <InfoCard title="League expansion" text="Add new sports and leagues over time without needing a full redesign." />
                <InfoCard title="Long-term growth" text="Use this as the starting point for a larger platform as your ideas become more clear." />
              </div>
            </section>

            <section id="contact" className="section stripe">
              <div className="container">
                <div className="card">
                  <h3>Contact</h3>
                  <p className="max-text">
                    Use your email here so people can reach you directly as the platform grows.
                  </p>
                  <div className="grid-three">
                    <div className="card dark compact">
                      <p className="muted">Email</p>
                      <p className="strong">kgeramy1@gmail.com</p>
                    </div>
                    <div className="card dark compact">
                      <p className="muted">Facebook</p>
                      <p className="strong">Add your Facebook link here</p>
                    </div>
                    <div className="card dark compact">
                      <p className="muted">Website status</p>
                      <p className="strong">Built to expand over time</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <footer className="footer">
            © 2026 NearPerfectPredictions.com
          </footer>
        </>
      )}
    </div>
  );
}
