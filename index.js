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
    BydBie: "13:42",
    TorGlo: "14:21",
    TorMia: "14:27"
  },
  {
    BydBie: "14:10",
    TorGlo: "14:40"
  },
  {
    BydBie: "14:40",
    TorGlo: "15:20"
  },
  {
    BydBie: "15:03",
    TorGlo: "15:33"
  },
  {
    BydBie: "15:42",
    TorGlo: "16:21",
    TorMia: "16:26"
  },
  {
    BydBie: "16:21",
    TorGlo: "16:55"
  },
  {
    BydBie: "16:48",
    TorGlo: "17:27"
  },
  {
    BydBie: "17:49",
    TorGlo: "18:28"
  },
  {
    BydBie: "18:26",
    TorGlo: "18:56"
  },
  {
    BydBie: "18:51",
    TorGlo: "19:30",
    TorMia: "19:37"
  },
  {
    BydBie: "20:16",
    TorGlo: "20:54",
    TorMia: "20:59"
  },
  {
    BydBie: "21:14",
    TorGlo: "21:44"
  },
  {
    BydBie: "22:42",
    TorGlo: "23:21"
  }
];

const trainsToBydgoszcz = [
  {
    TorGlo: "4:27",
    BydBie: "5:02"
  },
  {
    TorGlo: "4:58",
    BydBie: "5:27"
  },
  {
    TorMia: "5:26",
    TorGlo: "5:32",
    BydBie: "6:09"
  },
  {
    TorGlo: "6:19",
    BydBie: "6:48"
  },
  {
    TorMia: "6:27",
    TorGlo: "6:35",
    BydBie: "7:13"
  },
  {
    TorGlo: "7:16",
    BydBie: "7:44"
  },
  {
    TorGlo: "7:37",
    BydBie: "8:13"
  },
  {
    TorGlo: "8:16",
    BydBie: "8:45"
  },
  {
    TorGlo: "8:30",
    BydBie: "9:05"
  },
  {
    TorGlo: "9:35",
    BydBie: "10:11"
  },
  {
    TorGlo: "10:11",
    BydBie: "10:41"
  },
  {
    TorGlo: "10:40",
    BydBie: "11:17"
  },
  {
    TorGlo: "12:20",
    BydBie: "12:49"
  }
];

const byBikeToTrain = {
  FromHomeToTorMia: 10,
  FromHomeToTorGlo: 20,
  FromTrainToWork: 25,
  FromWorkToTrain: 20,
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
