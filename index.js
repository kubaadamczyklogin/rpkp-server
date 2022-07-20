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
    BydBie: "13:45",
    TorGlo: "14:24",
    TorMia: "14:28"
  },
  {
    BydBie: "14:03",
    TorGlo: "14:33"
  },
  {
    BydBie: "14:41",
    TorGlo: "15:20",
    TorMia: "15:28"
  },
  {
    BydBie: "15:11",
    TorGlo: "15:41"
  },
  {
    BydBie: "15:39",
    TorGlo: "16:16",
    TorMia: "16:21"
  },
  {
    BydBie: "16:19",
    TorGlo: "16:52"
  },
  {
    BydBie: "16:50",
    TorGlo: "17:29"
  },
  {
    BydBie: "17:51",
    TorGlo: "18:30"
  },
  {
    BydBie: "18:13",
    TorGlo: "18:44"
  },
  {
    BydBie: "18:54",
    TorGlo: "19:33",
    TorMia: "19:40"
  },
  {
    BydBie: "19:46",
    TorGlo: "20:25",
    TorMia: "20:29"
  },
  {
    BydBie: "21:21",
    TorGlo: "21:51"
  },
  {
    BydBie: "23:06",
    TorGlo: "23:45"
  }
];

const trainsToBydgoszcz = [
  {
    TorGlo: "4:14",
    BydBie: "4:52"
  },
  {
    TorGlo: "5:01",
    BydBie: "5:31"
  },
  {
    TorMia: "5:24",
    TorGlo: "5:29",
    BydBie: "6:06"
  },
  {
    TorGlo: "6:10",
    BydBie: "6:39"
  },
  {
    TorMia: "6:27",
    TorGlo: "6:34",
    BydBie: "7:11"
  },
  {
    TorGlo: "7:21",
    BydBie: "7:49"
  },
  {
    TorGlo: "7:39",
    BydBie: "8:15"
  },
  {
    TorGlo: "8:19",
    BydBie: "8:48"
  },
  {
    TorGlo: "8:53",
    BydBie: "9:29"
  },
  {
    TorGlo: "9:36",
    BydBie: "10:13"
  },
  {
    TorGlo: "10:50",
    BydBie: "11:19"
  },
  {
    TorGlo: "12:49",
    BydBie: "13:19"
  },
  {
    TorGlo: "13:28",
    BydBie: "14:07"
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
