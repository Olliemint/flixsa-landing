import { useEffect, useState } from "react";
import Circle from "../assets/iimages/circle.png";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";




const Base_URL = import.meta.env.VITE_TMBD_BASE_URL;



interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}




const MovieSlider = () => {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState<number>(0);
  const [currentMovie, setCurrentMovie] = useState<Movie>();
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  // Define a state to toggle visibility of the movie info div
  const [isInfoVisible, setIsInfoVisible] = useState(true);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  useEffect(() => {
    if (trendingMovies?.length > 0) {
      setCurrentMovie(trendingMovies[currentMovieIndex]);
    }
  }, [currentMovieIndex, currentMovie]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          `${Base_URL}/trending/movie/day?language=en-US`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjEzNzI0NGQ3MTZlM2FmYmZlOWFlZWJiMDBjMDg1YSIsInN1YiI6IjYyNjg3NTk1MTU4Yzg1MDA1MDY2NjY3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6OOvDI14uBwqMZMA6cGoatRQMDKH6tRMuy2b0yFsXQU",
            },
          }
        );
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchTrendingMovies();
  }, []);

  useEffect(() => {
    // Function to advance to the next movie
    const showNextMovie = () => {
      if (trendingMovies?.length > 0) {
        setCurrentMovieIndex((currentMovieIndex + 1) % trendingMovies?.length);
      }
    };

    // Set a timer to switch to the next movie after 5 seconds
    const timer = setTimeout(() => {
      showNextMovie();
    }, 5000);

    // Clear the timer when the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, [currentMovieIndex, trendingMovies]);

  return (
    <div className="py-24 max-w-[1440px] mx-auto md:mt-12">
      <div className="space-y-2 py-7 px-5 lg:hidden">
        <h1 className="text-[22px] font-groteska-bold tracking-[-0.66px] text-primaryWhite">
          Featured on Flixsa
        </h1>
        <p className="text-[18px] text-primaryGray font-groteska-medium">
          Best features for you today!
        </p>
      </div>
      <div className=" flex  flex-col-reverse lg:flex-row gap-7 md:pl-10">
        <div className="space-y-[74px] max-w-[487px] w-full px-[24px] md:px-0 ">
          <div className="space-y-2 hidden lg:block">
            <h1 className="text-[22px] font-groteska-bold tracking-[-0.66px] text-primaryWhite">
              Featured on Flixsa
            </h1>
            <p className="text-[18px] text-primaryGray font-groteska-medium">
              Best features for you today!
            </p>
          </div>
          <AnimatePresence mode="wait">


          <motion.div
            key={currentMovie?.id}
            initial={false} // Initial state (entry animation)
            animate={{ opacity: 1, y: 0 }} // Animation when the element is mounted
            exit={{ opacity: 0, y: -20 }} // Animation when the element is removed
            transition={{ duration: 0.5 }} // Animation duration
            className="max-w-[487px] space-y-6"
          >
            <h1 className="text-[22px] font-groteska-bold  text-primaryWhite md:text-[44px]">
              {currentMovie?.title}
            </h1>
            {/* buttons section */}
            <div className=" flex items-center gap-4">
              <p className="inline-flex items-center gap-[2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M2.06708 8.03333L4.46708 10.2333L3.80041 13.3C3.73375 13.7 3.86708 14.1 4.20041 14.3C4.33375 14.4333 4.53375 14.5 4.73375 14.5C4.86708 14.5 5.00041 14.5 5.13375 14.4333C5.13375 14.4333 5.20041 14.4333 5.20041 14.3667L7.93375 12.8333L10.6671 14.3667C10.6671 14.3667 10.7337 14.3667 10.7337 14.4333C11.0671 14.5667 11.4671 14.5667 11.7337 14.3667C12.0671 14.1667 12.2004 13.7667 12.1337 13.3667L11.4671 10.3C11.7337 10.1 12.1337 9.7 12.5337 9.3L13.8004 8.16667L13.8671 8.1C14.1337 7.83333 14.2004 7.43333 14.0671 7.1C13.9337 6.76667 13.6671 6.5 13.2671 6.43333H13.2004L10.0671 6.1L8.80041 3.23333C8.80041 3.23333 8.80041 3.16667 8.73375 3.16667C8.66708 2.7 8.33375 2.5 8.00041 2.5C7.66708 2.5 7.33375 2.7 7.13375 3.03333C7.13375 3.03333 7.13375 3.1 7.06708 3.1L5.80041 5.96667L2.66708 6.3H2.60041C2.26708 6.36667 1.93375 6.63333 1.80041 6.96667C1.73375 7.36667 1.80041 7.76667 2.06708 8.03333Z"
                    fill="#F7F8FF"
                  />
                </svg>
                <span className="text-xs font-groteska-bold text-primaryWhite">
                  {currentMovie?.vote_average}
                </span>
              </p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="24"
                  viewBox="0 0 2 24"
                  fill="none"
                >
                  <path
                    d="M1 23.5L1 0.499999"
                    stroke="#F7F8FF"
                    stroke-width="0.3"
                  />
                </svg>
              </span>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-4 ">
                <span className="">
                  <button
                    type="button"
                    className="px-[14px] py-[3px] text-xs font-groteska-regular text-primaryWhite inline-flex items-center gap-1 bg-ratingBtns rounded-[14px]"
                  >
                    Action
                    <span>
                      <img src={Circle} alt="" />
                    </span>
                  </button>
                </span>
                <span>
                  <button
                    type="button"
                    className="px-[14px] py-[3px] text-xs font-groteska-regular text-primaryWhite inline-flex items-center gap-1 bg-ratingBtns rounded-[14px]"
                  >
                    PG-18
                    <span>
                      <img src={Circle} alt="" />
                    </span>
                  </button>
                </span>
                <span>
                  <button
                    type="button"
                    className="px-[14px] py-[3px] text-xs font-groteska-regular text-primaryWhite inline-flex items-center gap-1 bg-ratingBtns rounded-[14px]"
                  >
                    {currentMovie?.release_date.slice(0, 4)}
                    <span>
                      <img src={Circle} alt="" />
                    </span>
                  </button>
                </span>
                <span>
                  <button
                    type="button"
                    className="px-[14px] py-[3px] text-xs font-groteska-regular text-primaryWhite inline-flex items-center gap-1 bg-ratingBtns rounded-[14px]"
                  >
                    2h 35m
                    <span>
                      <img src={Circle} alt="" />
                    </span>
                  </button>
                </span>
              </div>
            </div>
            <p className="font-groteska-medium leading-8 text-primaryGray md:text-[18px] ">
              {isDescriptionExpanded
                ? currentMovie?.overview
                : currentMovie?.overview.slice(0, 200)}
              {currentMovie && currentMovie?.overview.length > 200 && (
                <span
                  onClick={toggleDescription}
                  className="text-primaryBlue cursor-pointer ml-2"
                >
                  {isDescriptionExpanded ? "Read less" : "Read more..."}
                </span>
              )}
            </p>
          </motion.div>
          </AnimatePresence>
        </div>
        <div className="w-full overflow-x-hidden flex gap-x-4 px-5 md:px-0">
          {trendingMovies?.map((movie, index) => (
            <AnimatePresence>
              <motion.img
                key={movie.id}
                className={`w-[300px] h-[400px] object-cover rounded-xl md:w-[371px] md:h-[548px] ${
                  index === currentMovieIndex && "border-4 border-primaryWhite"
                }`}
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
                initial={{ opacity: 0, x: -50 }} // Initial animation values
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5 }, // Animation duration
                }}
                exit={{ opacity: 0, x: 50 }} // Exit animation values
                transition={{ duration: "1" }} // Transition between states
                style={{
                  display:
                    (index >= currentMovieIndex &&
                      index < currentMovieIndex + 5) ||
                    (currentMovieIndex === trendingMovies?.length - 1 &&
                      index >= trendingMovies?.length - 4)
                      ? "block"
                      : "none",
                }}
              />
            </AnimatePresence>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieSlider