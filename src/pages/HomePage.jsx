import HomePageSections from "../components/HomePageSections";

import PageNav from "../components/PageNav";

function HomePage() {
  return (
    <div>
      <header>
        <PageNav />
      </header>
      <main>
        <HomePageSections />
      </main>
    </div>
  );
}

export default HomePage;
