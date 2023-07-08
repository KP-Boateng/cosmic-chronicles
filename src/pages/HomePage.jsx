const HomePage = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="p-2">
        <h1 className="text-center font-extrabold text-4xl mt-2 text-orange-special">
          Cosmic Chronicles
        </h1>
        <div className="description text-white font-bold mt-5">
          <p>
            Your go-to-source for fascinating and mind-blending facts about our
            universe.
          </p>
          <p className="mt-2">
            From the mysteries of black holes to the awe-inspiring beauty of the
            Milky Way, we&apos;re here to take you on a journey through the
            Cosmos.
          </p>
          <h1 className="mt-3 mb-3 text-2xl text-orange-special text-center">
            Our Misson
          </h1>
          <p className="mt-2">
            Our misson is to bring you the latest discoveries and insights from
            the world of astronomy and space exploration, as well as to explore
            the history and culture of space science.
          </p>
          <p className="mt-2">
            So fasten your seatbelts and prepare for an adventure that will
            leave you starry-eyed and inspired.
          </p>
          <br />
          Let&apos;s blast off together into the vast expanse of the universe.
        </div>
      </div>
    </div>
  );
};

export default HomePage;
