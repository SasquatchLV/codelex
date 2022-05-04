const shows: ShowsType = [
  {
    id: 1,
    title: 'Arrow',
    description: 'It is based on the DC Comics character Green Arrow, a costumed crime-fighter',
    year: 2012,
    isPopular: false,
    available: false,
    ratingDetails: {
      rating: 8.1137,
      count: 642
    },
    genres: ['Drama', 'Action', 'Science-Fiction'],
    episodes: [
      {
        id: 1,
        title: 'Pilot',
        season: 1,
        episode: 1,
        released: '2012-10-11 00:00:00'
      },
      {
        id: 24,
        title: 'City of Heroes',
        season: 2,
        episode: 1,
        released: '2012-10-11 00:00:00'
      }
    ]
  },
  {
    id: 2,
    title: 'Bouncers',
    description: 'Series following the brave people who keep the peace at night.',
    year: 2019,
    isPopular: true,
    available: false,
    ratingDetails: {
      rating: 6.532,
      count: 583
    },
    genres: ['Lifestyle', 'Drama'],
    episodes: [
      {
        id: 1,
        title: 'Episode 5',
        season: 1,
        episode: 5,
        released: '2019-08-28 23:00:00'
      },
      {
        id: 6,
        title: 'Episode 6',
        season: 1,
        episode: 6,
        released: '2019-08-28 23:00:00'
      }
    ]
  },
  {
    id: 3,
    title: 'Supernatural',
    description: 'Two brothers follow their father\'s footsteps as hunters, fighting evil supernatural beings',
    year: 2005,
    isPopular: true,
    available: false,
    ratingDetails: {
      rating: 9.995,
      count: 50
    },
    genres: ['Fantasy', 'Drama'],
    episodes: [
      {
        id: 2,
        title: 'Wendigo',
        season: 1,
        episode: 2,
        released: '2005-09-20 23:00:00'
      }
    ]
  }
];

type ShowsType = {
  id: number;
  title: string;
  description: string;
  year: number;
  isPopular: boolean;
  available: boolean;
  ratingDetails: {
    rating: number;
    count: number;
}
  genres: string[];
  episodes: {
    id: number;
    title: string;
    season: number;
    episode: number;
    released: string;
  }[];
}[];

// map()
// Get an array of all titles
const titles = shows.map(show => show.title);
console.log("ArrayOfAllTitles", titles);
// Get an array of ids
const ids = shows.map(show => show.id);
console.log("ArrayOfIds", ids);
// Get an array of ratings
const ratings = shows.map(show => show.ratingDetails.rating);
console.log("ArrayOfRatings", ratings);
// Get an array of ratings rounded to 2 decimal places
const ratingsRounded = shows.map(show => +show.ratingDetails.rating.toFixed(2));
console.log("ArrayOfRatingsRounded", ratingsRounded);
// Capitalise all genres
const capitaliseAllGenres = shows.map((show) => ({
  ...show,
  genres: show.genres.map(genre => genre.toUpperCase())
}));
console.log("CapitaliseAllGenres", capitaliseAllGenres);
// Double all ratingDetails.count
const doubleAllCounts = shows.map((show) => ({
  ...show,
  ratingDetails: {
    ...show.ratingDetails,
    count: show.ratingDetails.count * 2
  }
}));
console.log("DoubleAllCounts", doubleAllCounts);
// Round all ratings to 2 decimal places
const roundAllRatings = shows.map((show) => ({
  ...show,
  ratingDetails: {
    ...show.ratingDetails,
    rating: +show.ratingDetails.rating.toFixed(2)
  }
}));
console.log("RoundAllRatings", roundAllRatings);
// map() each object to only have id, title, description - šo es piemirsu, bet te vnk skip spread
const mapToIdTitleDescription = shows.map(show => ({
  id: show.id,
  title: show.title,
  description: show.description
}));
console.log("mapToIdTitleDescription", mapToIdTitleDescription);
// If id === 1, change rating to 9.9999
const changeRatingTo9999 = shows.map((show) => {
  if (show.id === 1) {
    return {
      ...show,
      ratingDetails: {
        ...show.ratingDetails,
        rating: 9.9999
      }
    }
  } else {
    return show;
  }
}
);
console.log("changeRatingTo9999", changeRatingTo9999);
// If id === 2, change rating to 8 and add + 1 to rating count
const changeRatingTo8 = shows.map((show) => {
  if (show.id === 2) {
    return {
      ...show,
      ratingDetails: {
        ...show.ratingDetails,
        rating: 8,
        count: show.ratingDetails.count + 1
      }
    }
  } else {
    return show;
  }
}
);
console.log("changeRatingTo8", changeRatingTo8);
// If rating > 7, change isPopular value to true
const changeIsPopularToTrue = shows.map((show) => {
  if (show.ratingDetails.rating > 7) {
    return {
      ...show,
      isPopular: true
    }
  } else {
    return show;
  }
}
);
console.log("changeIsPopularToTrue", changeIsPopularToTrue);
// If isPopular === true, change rating to 10
const changeRatingTo10 = shows.map((show) => {
  if (show.isPopular) {
    return {
      ...show,
      ratingDetails: {
        ...show.ratingDetails,
        rating: 10
      }
    }
  } else {
    return show;
  }
}
);
console.log("changeRatingTo10", changeRatingTo10);
// If genres include 'Science-Fiction', change available to true
const changeAvailableToTrue = shows.map((show) => {
  if (show.genres.includes('Science-Fiction')) {
    return {
      ...show,
      available: true
    }
  } else {
    return show;
  }
}
);
console.log("changeAvailableToTrue", changeAvailableToTrue);
// If isPopular === true, map() episodes, to be an array of episode ids, else make episodes an empty []
const mapEpisodesToIds = shows.map((show) => {
  if (show.isPopular) {
    return {
      ...show,
      episodes: show.episodes.map(episode => episode.id)
    }
  }
  return {
    ...show,
    episodes: []
  }
}
);
console.log("mapEpisodesToIds", mapEpisodesToIds);
// Get an array of all possible genres (not [['', ''], ['']] but ['', '', '']) and remove duplicates
const allGenres = shows.map(show => show.genres).flat().filter((item, pos, array) => array.indexOf(item) === pos);
console.log("allGenres", allGenres);
// If year > 2016 and isPopular === true, add 'Documentary' to genres
const addDocumentary = shows.map((show) => {
  if (show.year > 2016 && show.isPopular) {
    return {
      ...show,
      genres: [...show.genres, 'Documentary']
    }
  }
  return show;
}
);
console.log("addDocumentary", addDocumentary);
// If id === 1 and episode id === 24, change episode releaseDate to '2022-10-12 00:00:00'
const changeReleaseDate = shows.map((show) => {
  if (show.id === 1) {
    return {
      ...show,
      episodes: show.episodes.map(episode => {
        if (episode.id === 24) {
          return {
            ...episode,
            released: '2022-10-12 00:00:00'
          }
        }
        return episode;
      })
    }
  }
  return show;
}
);
console.log("changeReleaseDate", changeReleaseDate);


// filter()
// Get all shows, where rating < 7
const ratingLessThan7 = shows.filter(show => show.ratingDetails.rating < 7);
console.log("ratingLessThan7", ratingLessThan7);
// Get all shows, where description includes "DC"
const descriptionContainsDC = shows.filter(show => show.description.includes("DC"));
console.log("descriptionContainsDC", descriptionContainsDC);
// Get all shows, where isPopular === true
const isPopular = shows.filter(show => show.isPopular);
console.log("isPopular", isPopular);
// Get all shows, where genres include Drama
const drama = shows.filter(show => show.genres.includes('Drama'));
console.log("drama", drama);
// Get all shows, where episode array length >= 2
const episodeLength = shows.filter(show => show.episodes.length >= 2);
console.log("episodeLength", episodeLength);
// Get all shows, where episode title is Wendigo
const episodeTitleWendigo = shows.filter(show => show.episodes.find(episode => episode.title === 'Wendigo'));
console.log("episodeTitleWendigo", episodeTitleWendigo);
// Get all shows, where year is < 2019
const yearLessThan2019 = shows.filter(show => show.year < 2019);
console.log("yearLessThan2019", yearLessThan2019);
// Get all shows, where title starts with Sup
const titleStartsWithSup = shows.filter(show => show.title.startsWith('Sup'));
console.log("titleStartsWithSup", titleStartsWithSup);
// Get all shows, where id === 2
const id2 = shows.filter(show => show.id === 2);
console.log("id2", id2);
// Get all shows, where id !== 2
const idNot2 = shows.filter(show => show.id !== 2);
console.log("idNot2", idNot2);
// Get all episodes, where genres include "Drama" and rating > 7
const dramaRatingGreaterThan7 = shows.filter(show => show.genres.includes('Drama') && show.ratingDetails.rating > 7);
console.log("dramaRatingGreaterThan7", dramaRatingGreaterThan7);