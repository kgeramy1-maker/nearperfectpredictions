import { useMemo, useState } from "react";

const sportsData = {
  NBA: {
    status: "Active",
    description:
      "NBA coverage focused on regular season trends, playoff pressure, matchup structure, and prediction research.",
    regularIntro:
      "Regular season games, team rhythm, pace, injuries, and matchup flow can be tracked here.",
    playoffIntro:
      "Playoff games, series pressure, momentum swings, and deeper high-stakes breakdowns belong here.",
    sampleGames: [
      { teams: "Boston Celtics vs Milwaukee Bucks", type: "Regular Season", note: "Team form, pace, injuries, and matchup edge." },
      { teams: "Los Angeles Lakers vs Denver Nuggets", type: "Playoffs", note: "Series pressure, star impact, and playoff adjustments." },
      { teams: "Phoenix Suns vs Dallas Mavericks", type: "Regular Season", note: "Scoring rhythm, defensive consistency, and rest." },
      { teams: "Miami Heat vs New York Knicks", type: "Playoffs", note: "Half-court matchup, depth, and late-game execution." },
    ],
    liveGames: [
      { teams: "TEST GAME vs TEST GAME", time: "RIGHT NOW", status: "Live" },
      { teams: "Los Angeles Lakers vs Denver Nuggets", time: "10:00 PM", status: "Scheduled" },
      { teams: "Phoenix Suns vs Dallas Mavericks", time: "Final", status: "Completed" },
      { teams: "Miami Heat vs New York Knicks", time: "Halftime", status: "Live" },
    ],
    teams: [
      "Atlanta Hawks", "Boston Celtics", "Brooklyn Nets", "Charlotte Hornets", "Chicago Bulls", "Cleveland Cavaliers",
      "Dallas Mavericks", "Denver Nuggets", "Detroit Pistons", "Golden State Warriors", "Houston Rockets", "Indiana Pacers",
      "LA Clippers", "Los Angeles Lakers", "Memphis Grizzlies", "Miami Heat", "Milwaukee Bucks", "Minnesota Timberwolves",
      "New Orleans Pelicans", "New York Knicks", "Oklahoma City Thunder", "Orlando Magic", "Philadelphia 76ers", "Phoenix Suns",
      "Portland Trail Blazers", "Sacramento Kings", "San Antonio Spurs", "Toronto Raptors", "Utah Jazz", "Washington Wizards",
    ],
  },
  NFL: {
    status: "Active",
    description:
      "NFL coverage built around weekly matchups, roster strength, game flow, coaching tendencies, and playoff intensity.",
    regularIntro:
      "Regular season football pages can track weekly games, trends, injuries, and team identity through the season.",
    playoffIntro:
      "Playoff football pages can focus on elimination pressure, quarterback impact, and postseason game breakdowns.",
    sampleGames: [
      { teams: "Kansas City Chiefs vs Buffalo Bills", type: "Playoffs", note: "Quarterback edge, pressure moments, and coaching decisions." },
      { teams: "Philadelphia Eagles vs Dallas Cowboys", type: "Regular Season", note: "Trench battle, pace control, and matchup leverage." },
      { teams: "Baltimore Ravens vs Cincinnati Bengals", type: "Regular Season", note: "Explosive play potential, defense, and discipline." },
      { teams: "San Francisco 49ers vs Detroit Lions", type: "Playoffs", note: "Scheme strength, balance, and late-game adjustment." },
    ],
    liveGames: [
      { teams: "Kansas City Chiefs vs Buffalo Bills", time: "8:20 PM", status: "Scheduled" },
      { teams: "Philadelphia Eagles vs Dallas Cowboys", time: "Final", status: "Completed" },
      { teams: "Baltimore Ravens vs Cincinnati Bengals", time: "3rd Quarter", status: "Live" },
      { teams: "San Francisco 49ers vs Detroit Lions", time: "Sunday", status: "Upcoming" },
    ],
    teams: [
      "Arizona Cardinals", "Atlanta Falcons", "Baltimore Ravens", "Buffalo Bills", "Carolina Panthers", "Chicago Bears",
      "Cincinnati Bengals", "Cleveland Browns", "Dallas Cowboys", "Denver Broncos", "Detroit Lions", "Green Bay Packers",
      "Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", "Kansas City Chiefs", "Las Vegas Raiders", "Los Angeles Chargers",
      "Los Angeles Rams", "Miami Dolphins", "Minnesota Vikings", "New England Patriots", "New Orleans Saints", "New York Giants",
      "New York Jets", "Philadelphia Eagles", "Pittsburgh Steelers", "San Francisco 49ers", "Seattle Seahawks", "Tampa Bay Buccaneers",
      "Tennessee Titans", "Washington Commanders",
    ],
  },
  NHL: {
    status: "Coming Soon",
    description:
      "NHL coverage ready for future matchup tracking, goalie impact, form analysis, and playoff series structure.",
    regularIntro:
      "Regular season hockey pages can track team form, goalie strength, travel spots, and matchup trends.",
    playoffIntro:
      "Playoff hockey pages can focus on series tempo, depth, goalie swings, and postseason pressure.",
    sampleGames: [
      { teams: "Boston Bruins vs Toronto Maple Leafs", type: "Regular Season", note: "Goaltending, line depth, and special teams." },
      { teams: "Colorado Avalanche vs Dallas Stars", type: "Playoffs", note: "Series pace, depth scoring, and defensive structure." },
      { teams: "Edmonton Oilers vs Vancouver Canucks", type: "Regular Season", note: "Top-end talent, form, and shot quality." },
      { teams: "New York Rangers vs Carolina Hurricanes", type: "Playoffs", note: "Goaltending edge, forecheck, and discipline." },
    ],
    liveGames: [
      { teams: "TEST GAME vs TEST GAME", time: "RIGHT NOW", status: "Live" },
      { teams: "Colorado Avalanche vs Dallas Stars", time: "Final", status: "Completed" },
      { teams: "Edmonton Oilers vs Vancouver Canucks", time: "2nd Period", status: "Live" },
      { teams: "New York Rangers vs Carolina Hurricanes", time: "Tomorrow", status: "Upcoming" },
    ],
    teams: [
      "Anaheim Ducks", "Boston Bruins", "Buffalo Sabres", "Calgary Flames", "Carolina Hurricanes", "Chicago Blackhawks",
      "Colorado Avalanche", "Columbus Blue Jackets", "Dallas Stars", "Detroit Red Wings", "Edmonton Oilers", "Florida Panthers",
      "Los Angeles Kings", "Minnesota Wild", "Montréal Canadiens", "Nashville Predators", "New Jersey Devils", "New York Islanders",
      "New York Rangers", "Ottawa Senators", "Philadelphia Flyers", "Pittsburgh Penguins", "San Jose Sharks", "Seattle Kraken",
      "St. Louis Blues", "Tampa Bay Lightning", "Toronto Maple Leafs", "Utah Hockey Club", "Vancouver Canucks", "Vegas Golden Knights",
      "Washington Capitals", "Winnipeg Jets",
    ],
  },
  MLB: {
    status: "Coming Soon",
    description:
      "MLB coverage ready for future pitcher-driven analysis, lineup structure, bullpen trends, and playoff series pages.",
    regularIntro:
      "Regular season baseball pages can track daily matchups, pitchers, lineup form, and recent trends.",
    playoffIntro:
      "Playoff baseball pages can focus on series management, bullpen leverage, and postseason pressure points.",
    sampleGames: [
      { teams: "New York Yankees vs Boston Red Sox", type: "Regular Season", note: "Starting pitcher edge, lineup form, and bullpen depth." },
      { teams: "Los Angeles Dodgers vs Atlanta Braves", type: "Playoffs", note: "Series leverage, bullpen usage, and power bats." },
      { teams: "Houston Astros vs Seattle Mariners", type: "Regular Season", note: "Pitching matchup, recent form, and run creation." },
      { teams: "Philadelphia Phillies vs San Diego Padres", type: "Playoffs", note: "Bullpen pressure, late innings, and lineup balance." },
    ],
    liveGames: [
      { teams: "New York Yankees vs Boston Red Sox", time: "7:05 PM", status: "Scheduled" },
      { teams: "Los Angeles Dodgers vs Atlanta Braves", time: "Final", status: "Completed" },
      { teams: "Houston Astros vs Seattle Mariners", time: "Top 6th", status: "Live" },
      { teams: "Philadelphia Phillies vs San Diego Padres", time: "Tomorrow", status: "Upcoming" },
    ],
    teams: [
      "Arizona Diamondbacks", "Athletics", "Atlanta Braves", "Baltimore Orioles", "Boston Red Sox", "Chicago Cubs",
      "Chicago White Sox", "Cincinnati Reds", "Cleveland Guardians", "Colorado Rockies", "Detroit Tigers", "Houston Astros",
      "Kansas City Royals", "Los Angeles Angels", "Los Angeles Dodgers", "Miami Marlins", "Milwaukee Brewers", "Minnesota Twins",
      "New York Mets", "New York Yankees", "Philadelphia Phillies", "Pittsburgh Pirates", "San Diego Padres", "San Francisco Giants",
      "Seattle Mariners", "St. Louis Cardinals", "Tampa Bay Rays", "Texas Rangers", "Toronto Blue Jays", "Washington Nationals",
    ],
  },
};

function StatCard({ label, value, subtext }) {
  return (
    <div className="stat-card">
      <p className="label">{label}</p>
      <p className="value">{value}</p>
      <p className="subtext">{subtext}</p>
    </div>
  );
}

function GameCard({ game }) {
  return (
    <div className="game-card">
      <div className="game-top">
        <p className="game-title">{game.teams}</p>
        <span className="badge">{game.type}</span>
      </div>
      <p className="game-note">{game.note}</p>
    </div>
  );
}

function LiveGameCard({ game }) {
  return (
    <div className="game-card">
      <div className="game-top">
        <p className="game-title">{game.teams}</p>
        <span className="badge">{game.status}</span>
      </div>
      <p className="game-note">Time / Update: {game.time}</p>
    </div>
  );
}

function TeamChip({ team }) {
  return <span className="team-chip">{team}</span>;
}

export default function App() {
  const [siteMode, setSiteMode] = useState("private");
  const [selectedSport, setSelectedSport] = useState("NBA");
  const accessGranted = siteMode === "public";
  const allSports = useMemo(() => Object.keys(sportsData), []);
  const currentSport = sportsData[selectedSport];

  return (
    <div className="page-shell">
      <div className="background-glow" />

      <header className="topbar">
        <div>
          <p className="eyebrow">Near Perfect Predictions</p>
          <h1 className="brand-title">NearPerfectPredictions.com</h1>
          <p className="brand-subtitle">
            Professional sports insight built to expand across leagues, games, and prediction research.
          </p>
        </div>

        <div className="topbar-right">
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
            Site mode: <span>{siteMode}</span>
          </p>
        </div>
      </header>

      {!accessGranted ? (
        <main className="private-main">
          <div className="private-card">
            <div className="warning-pill">Private website</div>
            <h2>Near Perfect Predictions is currently private.</h2>
            <p>
              This website is hidden right now. When you want people to view the full platform,
              switch the mode to public in the top right.
            </p>
            <div className="notice-box">
              Private mode keeps the website closed and shows only this message until you turn it public again.
            </div>
          </div>
        </main>
      ) : (
        <>
          <main>
            <section className="hero">
              <div>
                <div className="cyan-pill">Phase 1 live games ready</div>
                <h2>Smarter sports predictions with clean structure, pro design, and room to grow.</h2>
                <p className="hero-text">
                  Near Perfect Predictions is designed to organize NBA, NFL, NHL, and MLB coverage
                  into a serious-looking platform with separate game areas, team sections, and
                  future space for live matchups and learning tools.
                </p>
                <div className="button-row">
                  <a href="#live-games" className="btn-primary">View live games</a>
                  <a href="#sports" className="btn-secondary">Explore sport pages</a>
                </div>
              </div>

              <div className="hero-stats">
                <StatCard label="Sports" value="4" subtext="NBA, NFL, NHL, and MLB with room to expand later." />
                <div className="two-col">
                  <StatCard label="Structure" value="Separate" subtext="Each sport gets its own clean page area." />
                  <StatCard label="Phase 1" value="Live Games" subtext="Section added now and ready for real API data later." />
                </div>
              </div>
            </section>

            <section className="feature-strip">
              <StatCard label="Contact" value="kgeramy1@gmail.com" subtext="Direct email contact for the platform." />
              <StatCard label="Mode Control" value="Public / Private" subtext="You can switch the site on or off visually from the top bar." />
              <StatCard label="Future Goal" value="Live games + learning" subtext="Designed to grow into automatic matchup tracking and deeper team analysis." />
            </section>

            <section id="live-games" className="section container">
              <div className="section-copy">
                <p className="eyebrow">Phase 1 live games</p>
                <h3>Automatic matchup section structure starts here.</h3>
                <p>
                  This section is the first step toward full automation. Right now it shows a clean live-games layout using starter data. Later, this exact area can connect to a real sports API and update automatically.
                </p>
              </div>
              <div className="games-grid">
                {currentSport.liveGames.map((game) => (
                  <LiveGameCard key={`${selectedSport}-live-${game.teams}-${game.time}`} game={game} />
                ))}
              </div>
            </section>

            <section className="section container">
              <div className="section-copy">
                <p className="eyebrow">About the platform</p>
                <h3>Built to look serious now and scale later.</h3>
                <p>
                  Near Perfect Predictions is focused on sports data, matchup reasoning, game structure,
                  and future prediction tools. The site is being built so it looks professional today
                  while still leaving room for live feeds, team learning, and automated game tracking later.
                </p>
              </div>
            </section>

            <section id="sports" className="section container">
              <div className="section-top">
                <div className="section-copy">
                  <p className="eyebrow">Sport pages</p>
                  <h3>One professional page structure for each sport.</h3>
                  <p>
                    Each sport has its own page area with regular season coverage, playoff coverage,
                    evenly separated game cards, full team lists, and now a live-games section.
                  </p>
                </div>
                <div className="sports-tab-wrap">
                  {allSports.map((sport) => (
                    <button
                      key={sport}
                      onClick={() => setSelectedSport(sport)}
                      className={selectedSport === sport ? "sport-tab active-sport" : "sport-tab"}
                    >
                      {sport}
                    </button>
                  ))}
                </div>
              </div>

              <div className="sport-panel">
                <div className="sport-header">
                  <div>
                    <span className="badge">{currentSport.status}</span>
                    <h4>{selectedSport}</h4>
                    <p className="sport-description">{currentSport.description}</p>
                  </div>
                  <div className="sport-summary">
                    <StatCard label="Regular Season" value="Ready" subtext={currentSport.regularIntro} />
                    <StatCard label="Playoffs" value="Ready" subtext={currentSport.playoffIntro} />
                  </div>
                </div>

                <div className="games-section">
                  <div className="section-copy small">
                    <h5>Featured game layout</h5>
                    <p>Sample games are spaced evenly to keep the page organized and readable.</p>
                  </div>
                  <div className="games-grid">
                    {currentSport.sampleGames.map((game) => (
                      <GameCard key={`${selectedSport}-${game.teams}-${game.type}`} game={game} />
                    ))}
                  </div>
                </div>

                <div className="teams-section">
                  <div className="section-copy small">
                    <h5>All {selectedSport} teams</h5>
                    <p>Full team list included so the site can grow into team pages, matchup pages, and future live tracking.</p>
                  </div>
                  <div className="team-grid">
                    {currentSport.teams.map((team) => (
                      <TeamChip key={`${selectedSport}-${team}`} team={team} />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="section container">
              <div className="section-copy">
                <p className="eyebrow">Daily picks</p>
                <h3>Today’s featured picks section.</h3>
                <p>
                  This area is built for your current daily or weekly picks. You can swap these out anytime with real games and real notes.
                </p>
              </div>
              <div className="games-grid">
                <GameCard game={{ teams: "Boston Celtics vs Milwaukee Bucks", type: "Daily Pick", note: "Prediction: Celtics 60%. Stronger recent rhythm, cleaner defensive form, and better matchup flow." }} />
                <GameCard game={{ teams: "Kansas City Chiefs vs Buffalo Bills", type: "Daily Pick", note: "Prediction: Chiefs 54%. Quarterback edge, big-game experience, and stronger late-game trust." }} />
                <GameCard game={{ teams: "Colorado Avalanche vs Dallas Stars", type: "Daily Pick", note: "Prediction: Avalanche 52%. Slight edge through speed, pressure, and top-end scoring." }} />
                <GameCard game={{ teams: "Los Angeles Dodgers vs Atlanta Braves", type: "Daily Pick", note: "Prediction: Dodgers 57%. Pitching edge and stronger top-of-lineup balance." }} />
              </div>
            </section>

            <section className="section container">
              <div className="section-copy">
                <p className="eyebrow">Real game pages</p>
                <h3>Game breakdown pages you can build from.</h3>
                <p>
                  These sections give each sport a place for real matchup posts with prediction, reasoning, and notes.
                </p>
              </div>
              <div className="three-col">
                <StatCard label="NBA Game Page" value="Ready" subtext="Use this area for NBA game breakdowns, predictions, and notes." />
                <StatCard label="NFL Game Page" value="Ready" subtext="Use this area for NFL matchup posts and weekly prediction pages." />
                <StatCard label="NHL / MLB Pages" value="Ready" subtext="Use these areas for hockey and baseball game writeups as you add more content." />
              </div>
              <div className="sport-panel">
                <div className="section-copy small">
                  <h5>Example real post format</h5>
                  <p>Use this layout each time you want to post a real game prediction on the site.</p>
                </div>
                <div className="games-grid">
                  <GameCard game={{ teams: "Celtics vs Bucks", type: "NBA Breakdown", note: "Prediction: Celtics 60%. Reason: better recent form, stronger defensive control, and cleaner matchup structure." }} />
                  <GameCard game={{ teams: "Chiefs vs Bills", type: "NFL Breakdown", note: "Prediction: Chiefs 54%. Reason: playoff composure, quarterback edge, and stronger situational trust." }} />
                </div>
              </div>
            </section>

            <section className="section container">
              <div className="section-copy">
                <p className="eyebrow">Prediction tracking</p>
                <h3>Track wins, losses, and accuracy over time.</h3>
                <p>
                  This gives you a place to measure how your predictions are doing and helps the platform feel more real and trustworthy.
                </p>
              </div>
              <div className="three-col">
                <StatCard label="Total Picks" value="24" subtext="Total predictions posted so far." />
                <StatCard label="Wins" value="15" subtext="Predictions that finished correctly." />
                <StatCard label="Accuracy" value="62.5%" subtext="Sample tracking rate for current posted picks." />
              </div>
              <div className="sport-panel">
                <div className="section-copy small">
                  <h5>Tracking examples</h5>
                  <p>As you update the site, replace these with your real prediction results.</p>
                </div>
                <div className="games-grid">
                  <GameCard game={{ teams: "Celtics vs Bucks", type: "Result: Win", note: "Posted at 60%. Final result matched the prediction." }} />
                  <GameCard game={{ teams: "Chiefs vs Bills", type: "Result: Loss", note: "Posted at 54%. Final result went the other way. Keep the post and track it honestly." }} />
                </div>
              </div>
            </section>

            <section className="section container">
              <div className="section-copy">
                <p className="eyebrow">Features</p>
                <h3>Everything is structured for growth.</h3>
              </div>
              <div className="three-col">
                <StatCard label="Prediction Pages" value="Built in" subtext="Each sport can grow into real game breakdown pages and prediction posts." />
                <StatCard label="Team Expansion" value="Ready" subtext="Every team is already listed so future pages can be connected later." />
                <StatCard label="Future Automation" value="Planned" subtext="The layout is ready for live schedules, automatic matchups, and learning tools later." />
              </div>
            </section>

            <section id="contact" className="section contact-shell">
              <div className="contact-panel">
                <div className="section-copy">
                  <p className="eyebrow">Contact</p>
                  <h3>Stay connected as the platform grows.</h3>
                  <p>
                    Use the contact section to reach out directly while the site develops into a bigger sports platform.
                  </p>
                </div>
                <div className="three-col">
                  <StatCard label="Email" value="kgeramy1@gmail.com" subtext="Main contact for Near Perfect Predictions." />
                  <StatCard label="Facebook" value="Add link" subtext="You can replace this with your real Facebook link later." />
                  <StatCard label="Website Status" value="Live" subtext="The site is live and ready to keep improving from here." />
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
