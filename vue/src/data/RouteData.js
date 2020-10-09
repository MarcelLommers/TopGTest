// Pages
import HelloWorld from "../components/HelloWorld"

import Task1Page from '../pages/TopG/Task1Page'
import Task2Page from '../pages/TopG/Task2Page'
import Task3Page from '../pages/TopG/Task3Page'
import Task4Page from '../pages/TopG/Task4Page'

import TwitClonePage from "../pages/TwitClone/TwitClonePage";
import TwitCloneUserListPage from "../pages/TwitClone/TwitCloneUserListPage";
import TwitCloneUserPage from "../pages/TwitClone/TwitCloneUserPage";

import RickAndMortyPage from "../pages/RickAndMorty/RickAndMortyPage";
import RMCharacterPage from "../pages/RickAndMorty/CharacterPage";
import RMCharactersPage from "../pages/RickAndMorty/CharactersPage";
import RMEpisodePage from "../pages/RickAndMorty/EpisodePage";
import RMEpisodesPage from "../pages/RickAndMorty/EpisodesPage";
import RMLocationPage from "../pages/RickAndMorty/LocationPage";
import RMLocationsPage from "../pages/RickAndMorty/LocationsPage";


export default [
  {
    path: "/home",
    alias: '/',
    name: "Home",
    components: {
      content: HelloWorld
    },
    meta: {
      allowAnonymous: true
    }
  },

  {
    path: "/task1",
    name: "Task1",
    components: {
      content: Task1Page
    },
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: "/task2",
    name: "Task2",
    components: {
      content: Task2Page
    },
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: "/task3",
    name: "Task3",
    components: {
      content: Task3Page
    },
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: "/task4",
    name: "Task4",
    components: {
      content: Task4Page
    },
    meta: {
      allowAnonymous: true
    }
  },

  // temp. disabled due to current backend exclusion
  // {
  //   path: "/twitClone",
  //   name: "twitClone",
  //   components: {
  //     content: TwitClonePage
  //   },
  //   meta: {
  //     allowAnonymous: true
  //   }
  // },
  // {
  //   path: "/twitCloneUserList",
  //   name: "twitCloneUserList",
  //   components: {
  //     content: TwitCloneUserListPage
  //   },
  //   meta: {
  //     allowAnonymous: true
  //   }
  // },
  // {
  //   path: "/twitCloneUser/:userId?",
  //   name: "twitCloneUser",
  //   components: {
  //     content: TwitCloneUserPage
  //   },
  //   meta: {
  //     allowAnonymous: true
  //   }
  // },

  {
    path: "/RickAndMorty",
    name: "Rick and Morty",
    components: {
      content: RickAndMortyPage
    },
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: "/RickAndMortyCharacters",
    name: "Rick and Morty - Characters",
    components: {
      content: RMCharactersPage
    },
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: "/RickAndMortyCharacter",
    name: "Rick and Morty - Character",
    components: {
      content: RMCharacterPage
    },
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: "/RickAndMortyLocations",
    name: "Rick and Morty - Locations",
    components: {
      content: RMLocationsPage
    },
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: "/RickAndMortyLocation",
    name: "Rick and Morty - Location",
    components: {
      content: RMLocationPage
    },
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: "/RickAndMortyEpisodes",
    name: "Rick and Morty - Episodes",
    components: {
      content: RMEpisodesPage
    },
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: "/RickAndMortyEpisode",
    name: "Rick and Morty - Episode",
    components: {
      content: RMEpisodePage
    },
    meta: {
      allowAnonymous: true
    }
  }

]
