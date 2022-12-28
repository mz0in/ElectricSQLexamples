import {data} from './migrations';

const config = {
  app: "example-app",
  token: "my-token",
  replication: {
    host: "localhost",
    port: 5133,
    ssl: true,
  },
  migrations: data.migrations,
};

export default config;
