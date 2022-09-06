const { ApolloServer, gql } = require("apollo-server");

const PORT = process.env.PORT || 4000;

const typeDefs = gql`
  # This "Train" type defines specific train conection between Toruń and Bydgoszcz with optional station Touń Miasto.
  type Train {
    TorMia: String
    TorGlo: String!
    BydBie: String!
  }

  # This "BikeRide" type defines travel time by bike between stations and destinations.
  type BikeRide {
    FromHomeToTorMia: Int!
    FromHomeToTorGlo: Int!
    FromTrainToWork: Int!
    FromWorkToTrain: Int!
    FromTorMiaToHome: Int!
    FromTorGloToHome: Int!
  }

  # This "Query" type defines all availble queries in this server.
  type Query {
    TrainsToBydgoszcz: [Train]!
    TrainsToTorun: [Train]!
    ByBikeToTrain: BikeRide!
  }
`;

const trainsToTorun = [
  {
    BydBie: "13:47",
    TorGlo: "14:26",
    TorMia: "14:31"
  },
  {
    BydBie: "14:08",
    TorGlo: "14:38"
  },
  {
    BydBie: "14:41",
    TorGlo: "15:20",
    TorMia: "15:28"
  },
  {
    BydBie: "15:15",
    TorGlo: "15:45"
  },
  {
    BydBie: "15:39",
    TorGlo: "16:18",
    TorMia: "16:23"
  },
  {
    BydBie: "16:00",
    TorGlo: "16:33"
  },
  {
    BydBie: "16:57",
    TorGlo: "17:36"
  },
  {
    BydBie: "17:49",
    TorGlo: "18:28"
  },
  {
    BydBie: "18:19",
    TorGlo: "18:50"
  },
  {
    BydBie: "18:48",
    TorGlo: "19:27",
    TorMia: "19:33"
  },
  {
    BydBie: "19:43",
    TorGlo: "20:22",
    TorMia: "20:34"
  },
  {
    BydBie: "21:22",
    TorGlo: "21:52"
  },
  {
    BydBie: "22:42",
    TorGlo: "23:21"
  }
];

const trainsToBydgoszcz = [
  {
    TorGlo: "4:24",
    BydBie: "5:01"
  },
  {
    TorGlo: "4:57",
    BydBie: "5:27"
  },
  {
    TorMia: "5:19",
    TorGlo: "5:26",
    BydBie: "6:03"
  },
  {
    TorGlo: "6:17",
    BydBie: "6:46"
  },
  {
    TorMia: "6:27",
    TorGlo: "6:33",
    BydBie: "7:10"
  },
  {
    TorGlo: "7:21",
    BydBie: "7:49"
  },
  {
    TorGlo: "7:39",
    BydBie: "8:14"
  },
  {
    TorGlo: "8:15",
    BydBie: "8:44"
  },
  {
    TorGlo: "8:46",
    BydBie: "9:21"
  },
  {
    TorGlo: "9:35",
    BydBie: "10:11"
  },
  {
    TorGlo: "10:17",
    BydBie: "10:46"
  },
  {
    TorGlo: "10:34",
    BydBie: "11:09"
  },
  {
    TorGlo: "12:40",
    BydBie: "13:12"
  },
  {
    TorGlo: "13:34",
    BydBie: "14:12"
  }
];

const byBikeToTrain = {
  FromHomeToTorMia: 10,
  FromHomeToTorGlo: 20,
  FromTrainToWork: 25,
  FromWorkToTrain: 25,
  FromTorMiaToHome: 10,
  FromTorGloToHome: 20
};

const resolvers = {
  Query: {
    TrainsToBydgoszcz: () => trainsToBydgoszcz,
    TrainsToTorun: () => trainsToTorun,
    ByBikeToTrain: () => byBikeToTrain
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
