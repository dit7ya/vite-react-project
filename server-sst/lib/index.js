import ApolloStack from "./ApolloStack";

export default function main(app) {
  app.setDefaultFunctionProps({
    runtime: "nodejs12.x"
  });

  new ApolloStack(app, "my-stack");

  // // Add more stacks
}
