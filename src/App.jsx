import { useState } from "react";

const sportsPages = {
  NBA: {
    status: "Active",
    regular: "Regular season analysis, team form tracking, matchup breakdowns, and evolving prediction tools.",
    playoffs: "Playoff game analysis focused on pressure matchups, momentum, and series-based insight.",
    teams: [
      "Atlanta Hawks", "Boston Celtics", "Brooklyn Nets", "Charlotte Hornets", "Chicago Bulls", "Cleveland Cavaliers",
      "Dallas Mavericks", "Denver Nuggets", "Detroit Pistons", "Golden State Warriors", "Houston Rockets", "Indiana Pacers",
      "LA Clippers", "Los Angeles Lakers", "Memphis Grizzlies", "Miami Heat", "Milwaukee Bucks", "Minnesota Timberwolves",
      "New Orleans Pelicans", "New York Knicks", "Oklahoma City Thunder", "Orlando Magic", "Philadelphia 76ers", "Phoenix Suns",
      "Portland Trail Blazers", "Sacramento Kings", "San Antonio Spurs", "Toronto Raptors", "Utah Jazz", "Washington Wizards"
    ],
  },
  NFL: {
    status: "Active",
    regular: "Regular season game pages for weekly breakdowns, trends, team form, and matchup research.",
    playoffs: "Playoff and postseason pages built for higher-pressure games, elimination matchups, and deeper analysis.",
    teams: [
      "Arizona Cardinals", "Atlanta Falcons", "Baltimore Ravens", "Buffalo Bills", "Carolina Panthers", "Chicago Bears",
      "Cincinnati Bengals", "Cleveland Browns", "Dallas Cowboys", "Denver Broncos", "Detroit Lions", "Green Bay Packers",
      "Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", "Kansas City Chiefs", "Las Vegas Raiders", "Los Angeles Chargers",
      "Los Angeles Rams", "Miami Dolphins", "Minnesota Vikings", "New England Patriots", "New Orleans Saints", "New York Giants",
      "New York Jets", "Philadelphia Eagles", "Pittsburgh Steelers", "San Francisco 49ers", "Seattle Seahawks", "Tampa Bay Buccaneers",
      "Tennessee Titans", "Washington Commanders"
    ],
  },
  NHL: {
    status: "Coming Soon",
    regular: "Future regular season hockey research, matchup notes, and tracking tools.",
    playoffs: "Future playoff hockey analysis and postseason performance insights.",
    teams: [
      "Anaheim Ducks", "Boston Bruins", "Buffalo Sabres", "Calgary Flames", "Carolina Hurricanes", "Chicago Blackhawks",
      "Colorado Avalanche", "Columbus Blue Jackets", "Dallas Stars", "Detroit Red Wings", "Edmonton Oilers", "Florida Panthers",
      "Los Angeles Kings", "Minnesota Wild", "Montréal Canadiens", "Nashville Predators", "New Jersey Devils", "New York Islanders",
      "New York Rangers", "Ottawa Senators", "Philadelphia Flyers", "Pittsburgh Penguins", "San Jose Sharks", "Seattle Kraken",
      "St. Louis Blues", "Tampa Bay Lightning", "Toronto Maple Leafs", "Utah Hockey Club", "Vancouver Canucks", "Vegas Golden Knights",
      "Washington Capitals", "Winnipeg Jets"
    ],
  },
  MLB: {
    status: "Coming Soon",
    regular: "Future regular season baseball pages for daily games, team form, and data-based insight.",
    playoffs: "Future postseason baseball analysis for playoff series and high-pressure matchups.",
    teams: [
      "Arizona Diamondbacks", "Athletics", "Atlanta Braves", "Baltimore Orioles", "Boston Red Sox", "Chicago Cubs",
      "Chicago White Sox", "Cincinnati Reds", "Cleveland Guardians", "Colorado Rockies", "Detroit Tigers", "Houston Astros",
      "Kansas City Royals", "Los Angeles Angels", "Los Angeles Dodgers", "Miami Marlins", "Milwaukee Brewers", "Minnesota Twins",
      "New York Mets", "New York Yankees", "Philadelphia Phillies", "Pittsburgh Pirates", "San Diego Padres", "San Francisco Giants",
      "Seattle Mariners", "St. Louis Cardinals", "Tampa Bay Rays", "Texas Rangers", "Toronto Blue Jays", "Washington Nationals"
    ],
  },
};

function InfoCard({ title, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="mt-2 text-slate-300">{text}</p>
    </div>
  );
}

export default function StarterWebsite() {
  const [siteMode, setSiteMode] = useState("private");
  const [selectedSport, setSelectedSport] = useState("NBA");
  const accessGranted = siteMode === "public";
  const currentSport = sportsPages[selectedSport];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-900/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-xl font-semibold tracking-wide">NearPerfectPredictions.com</h1>
            <p className="text-sm text-slate-400">Smarter sports insight built to grow over time</p>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 text-sm">
              <button
                onClick={() => setSiteMode("private")}
                className={`rounded-xl px-4 py-2 transition ${
                  siteMode === "private" ? "bg-white text-slate-900" : "text-slate-300 hover:bg-white/10"
                }`}
              >
                Private
              </button>
              <button
                onClick={() => setSiteMode("public")}
                className={`rounded-xl px-4 py-2 transition ${
                  siteMode === "public" ? "bg-cyan-300 text-slate-950" : "text-slate-300 hover:bg-white/10"
                }`}
              >
                Public
              </button>
            </div>
            <p className="text-xs text-slate-400">
              Current mode: <span className="font-medium text-white">{siteMode}</span>
            </p>
          </div>
        </div>
      </header>

      {!accessGranted ? (
        <main className="mx-auto flex min-h-[80vh] max-w-3xl items-center px-6 py-20">
          <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
            <p className="mb-3 inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
              Private website
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Near Perfect Predictions is currently private.</h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              This website is hidden right now. When you want people to view it, switch the mode to public in the top right.
            </p>

            <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm text-cyan-100">
              Private mode hides the full website and shows only this message until you switch it back to public.
            </div>
          </div>
        </main>
      ) : (
        <>
          <main>
            <section id="home" className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
              <div>
                <p className="mb-3 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                  Prediction platform
                </p>
                <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                  Smarter sports predictions built through data, patterns, and growth.
                </h2>
                <p className="mt-5 max-w-xl text-base text-slate-300 md:text-lg">
                  Near Perfect Predictions is being built as a growing platform for sports insight, analysis, and evolving prediction tools.
                  Each sport now has its own dedicated page section.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#sports"
                    className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:scale-[1.02]"
                  >
                    View sports pages
                  </a>
                  <a
                    href="#contact"
                    className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5"
                  >
                    Contact
                  </a>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
                  <p className="text-sm text-cyan-300">Platform vision</p>
                  <h3 className="mt-2 text-2xl font-semibold">One page for each sport</h3>
                  <p className="mt-3 text-slate-300">
                    NBA, NFL, NHL, and MLB each now have their own clean page section so the platform can stay organized and grow naturally.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-slate-900 p-5">
                    <p className="text-sm text-slate-400">Current focus</p>
                    <p className="mt-2 font-medium">Prediction research</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-900 p-5">
                    <p className="text-sm text-slate-400">Structure</p>
                    <p className="mt-2 font-medium">4 sport pages</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="about" className="border-y border-white/10 bg-slate-900/60">
              <div className="mx-auto max-w-6xl px-6 py-16">
                <h3 className="text-3xl font-semibold">About Near Perfect Predictions</h3>
                <p className="mt-4 max-w-3xl text-slate-300">
                  Near Perfect Predictions is focused on studying sports data, trends, and performance patterns to better understand outcomes.
                  The goal is to build a platform that keeps improving over time, while staying simple enough to grow step by step.
                </p>
              </div>
            </section>

            <section id="sports" className="mx-auto max-w-6xl px-6 py-16">
              <div className="mb-8">
                <h3 className="text-3xl font-semibold">Sport pages</h3>
                <p className="mt-3 max-w-3xl text-slate-300">
                  Each sport now has its own dedicated page section. Inside each one, you can build out regular season games and playoff games separately as the site grows.
                </p>
              </div>

              <div className="mb-8 flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 text-sm w-fit">
                {Object.keys(sportsPages).map((sport) => (
                  <button
                    key={sport}
                    onClick={() => setSelectedSport(sport)}
                    className={`rounded-xl px-4 py-2 transition ${
                      selectedSport === sport ? "bg-white text-slate-900" : "text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    {sport}
                  </button>
                ))}
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-6">
                <div className="mb-5 flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <h4 className="text-2xl font-semibold">{selectedSport} Page</h4>
                    <p className="mt-1 text-slate-400">Dedicated page structure for {selectedSport}</p>
                  </div>
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                    {currentSport.status}
                  </span>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <InfoCard title={`${selectedSport} Regular Season Games`} text={currentSport.regular} />
                  <InfoCard title={`${selectedSport} Playoff Games`} text={currentSport.playoffs} />
                </div>

                <div className="mt-6">
                  <h4 className="text-xl font-semibold">All {selectedSport} Teams</h4>
                  <p className="mt-2 text-slate-300">
                    Every team for {selectedSport} is listed here so the site can grow into live matchups, team pages, and future prediction tools.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {currentSport.teams.map((team) => (
                      <span
                        key={`${selectedSport}-${team}`}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                      >
                        {team}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section id="sample-games" className="mx-auto max-w-6xl px-6 pb-16">
              <div className="mb-8">
                <h3 className="text-3xl font-semibold">Sample game pages</h3>
                <p className="mt-3 text-slate-300">
                  These are starter examples showing how a game page can look before live data and automation are added.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm text-cyan-300">NBA sample page</p>
                  <h4 className="mt-2 text-2xl font-semibold">Lakers vs Suns</h4>
                  <p className="mt-4 text-sm text-slate-400">Prediction</p>
                  <p className="mt-1 text-lg font-medium">Lakers win probability: 58%</p>
                  <p className="mt-4 text-sm text-slate-400">Reasoning</p>
                  <p className="mt-1 text-slate-300">
                    Current form, matchup flow, and lineup strength suggest a slight edge. This section can later include injuries, team trends, and deeper notes.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">Regular Season</span>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">Game Notes</span>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">Prediction</span>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm text-cyan-300">NFL sample page</p>
                  <h4 className="mt-2 text-2xl font-semibold">Chiefs vs Bills</h4>
                  <p className="mt-4 text-sm text-slate-400">Prediction</p>
                  <p className="mt-1 text-lg font-medium">Chiefs win probability: 54%</p>
                  <p className="mt-4 text-sm text-slate-400">Reasoning</p>
                  <p className="mt-1 text-slate-300">
                    Team form, pressure situations, and overall matchup balance point to a close game. This block can later grow into a full breakdown page.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">Playoffs</span>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">Game Notes</span>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">Prediction</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="features" className="mx-auto max-w-6xl px-6 pb-16">
              <div className="mb-8">
                <h3 className="text-3xl font-semibold">What this site is built for</h3>
                <p className="mt-3 text-slate-300">
                  The foundation is simple now, but it is designed to support more pages, more sports, and more tools later.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                <InfoCard title="Prediction pages" text="Create sections for game breakdowns, matchup notes, and future prediction tools." />
                <InfoCard title="League expansion" text="Add new sports and leagues over time without needing a full redesign." />
                <InfoCard title="Long-term growth" text="Use this as the starting point for a larger platform as your ideas become more clear." />
              </div>
            </section>

            <section id="contact" className="bg-slate-900/70">
              <div className="mx-auto max-w-6xl px-6 py-16">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                  <h3 className="text-3xl font-semibold">Contact</h3>
                  <p className="mt-3 max-w-2xl text-slate-300">
                    Use your email here so people can reach you directly as the platform grows.
                  </p>
                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                      <p className="text-sm text-slate-400">Email</p>
                      <p className="mt-1">kgeramy1@gmail.com</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                      <p className="text-sm text-slate-400">Facebook</p>
                      <p className="mt-1">Add your Facebook link here</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                      <p className="text-sm text-slate-400">Website status</p>
                      <p className="mt-1">Built to expand over time</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-slate-400">
            © 2026 NearPerfectPredictions.com
          </footer>
        </>
      )}
    </div>
  );
}
