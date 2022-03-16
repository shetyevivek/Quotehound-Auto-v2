const { ApolloServer, gql } = require("apollo-server");

// These are called properties
// Scalar types: Int, Float, String, Boolean
const typeDefs = gql`
  type Query {
    car_year: [Info]
    cars(year: Int!): Info
  }
  type Info {
    year: Int
    car_make: [Details]
    make_model(make: String!): Details
  }
  type Details {
   make: String
   model: [String]
  }
`
// Property: Type

const car = [
  {
    "year": 2020,
    "make_model": [
      {
        "make": "Acura",
        "model": ["ILX","MDX","MDX Hybrid Sport","MDX Sport Hybrid","NSX","RDX","RLX","RLX Hybrid Sport","RLX Sport Hybrid","TLX"]
      },
      {
        "make": "Alfa Romeo",
        "model": ["4C","4C Spider","Giulia","Stelvio"]
      }
    ]
  },
  {
    "year": 2021,
    "make_model": [
      {
        "make": "Toyota",
        "model": ["Camry","Corolla_LT"]
      },
      {
        "make": "Chevrolet",
        "model": ["Beat","Cruze_VXI"]
      }
    ]
  }
];

const carmake = [
    {
        "make": "Acura"
    },
    {
        "make": "Alfa Romeo"
    },
    {
        "make": "Aston Martin"
    },
    {
        "make": "Audi"
    },
    {
        "make": "Bentley"
    },
    {
        "make": "BMW"
    },
    {
        "make": "Buick"
    },
    {
        "make": "Cadillac"
    },
    {
        "make": "Chevrolet"
    },
    {
        "make": "Chrysler"
    },
    {
        "make": "Dodge"
    },
    {
        "make": "Ferrari"
    },
    {
        "make": "FIAT"
    },
    {
        "make": "Ford"
    },
    {
        "make": "Freightliner"
    },
    {
        "make": "Genesis"
    },
    {
        "make": "GMC"
    },
    {
        "make": "Honda"
    },
    {
        "make": "Hyundai"
    },
    {
        "make": "INFINITI"
    },
    {
        "make": "Jaguar"
    },
    {
        "make": "Jeep"
    },
    {
        "make": "Karma"
    },
    {
        "make": "Kia"
    },
    {
        "make": "Lamborghini"
    },
    {
        "make": "Land Rover"
    },
    {
        "make": "Lexus"
    },
    {
        "make": "Lincoln"
    },
    {
        "make": "Lotus"
    },
    {
        "make": "Maserati"
    },
    {
        "make": "Mazda"
    },
    {
        "make": "McLaren"
    },
    {
        "make": "Mercedes-Benz"
    },
    {
        "make": "MINI"
    },
    {
        "make": "Mitsubishi"
    },
    {
        "make": "Nissan"
    },
    {
        "make": "Polestar"
    },
    {
        "make": "Porsche"
    },
    {
        "make": "RAM"
    },
    {
        "make": "Rivian"
    },
    {
        "make": "Rolls-Royce"
    },
    {
        "make": "Subaru"
    },
    {
        "make": "Tesla"
    },
    {
        "make": "Toyota"
    },
    {
        "make": "Volkswagen"
    },
    {
        "make": "Volvo"
    }
];

  const resolvers = {
    Query: {
      cars: (obj, args, context) => {
        return car.find(cars => cars.year === args.year)
      },
      car_year: () => {
        return car
      },
    },
    Info: {
      make_model: (obj, args, context) => {
        return obj.make_model.find(make_model => make_model.make === args.make)
      },
      car_make: () => {
        return carmake
      },
    }
  }

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url}) => {
    console.log("Server is ready at " + url);
});