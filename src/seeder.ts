import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import config from "./config/config";
import User from "./models/User";

mongoose.connect(config.mongo.url);

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error?: Error) => console.log("❌ DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);

const seed = async () => {
  for (let i = 0; i < 10; i++) {
    const user = new User({
      username: faker.helpers.unique(faker.internet.userName),
      password: faker.internet.password(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.helpers.unique(faker.internet.email),
      street: faker.address.street(),
      housenumber: faker.address.buildingNumber(),
      zipcode: parseInt(faker.address.zipCode()),
      city: faker.address.city(),
      country: faker.address.country(),
      role: faker.company.bsBuzz(),
    });

    try {
      const createdUser = await User.create(user);
      console.log(createdUser);
    } catch (error) {
      console.log(error);
    }
  }
};
seed();
// npx ts-node server/seed.ts => create fake user data
