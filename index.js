const { ApolloServer, gql } = require('apollo-server');

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
      BydBie: "14:12",
      TorGlo: "14:42"
    },
    {
      BydBie: "14:42",
      TorGlo: "15:22"
    },
    {
      BydBie: "15:12",
      TorGlo: "15:42"
    },
    {
      BydBie: "15:32",
      TorGlo: "16:11",
      TorMia: "16:26"
    },
    {
      BydBie: "15:59",
      TorGlo: "16:33"
    },
    {
      BydBie: "16:42",
      TorGlo: "17:21"
    },
    {
      BydBie: "17:42",
      TorGlo: "18:21",
      TorMia: "18:28"
    },
    {
      BydBie: "18:15",
      TorGlo: "18:45"
    },
    {
      BydBie: "18:41",
      TorGlo: "19:20"
    },
    {
      BydBie: "19:42",
      TorGlo: "20:21",
      TorMia: "20:25"
    }
];
  
const trainsToBydgoszcz = [
    {
      TorGlo: "4:35",
      BydBie: "5:12"
    },
    {
      TorGlo: "5:06",
      BydBie: "5:36"
    },
    {
      TorMia: "5:28",
      TorGlo: "5:35",
      BydBie: "6:12"
    },
    {
      TorGlo: "6:15",
      BydBie: "6:44"
    },
    {
      TorMia: "6:28",
      TorGlo: "6:35",
      BydBie: "7:13"
    },
    {
      TorGlo: "7:05",
      BydBie: "7:33"
    },
    {
      TorGlo: "7:38",
      BydBie: "8:14"
    },
    {
      TorGlo: "8:15",
      BydBie: "8:44"
    },
    {
      TorGlo: "8:35",
      BydBie: "9:10"
    },
    {
      TorGlo: "9:35",
      BydBie: "10:11"
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
        TrainsToBydgoszcz:() => trainsToBydgoszcz,
        TrainsToTorun: () => trainsToTorun,
        ByBikeToTrain: () => byBikeToTrain  
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: PORT }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});