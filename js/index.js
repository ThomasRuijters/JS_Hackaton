import { View } from "./view.js";
import { Eagle } from "./bird/eagle.js";
import { Pigeon } from "./bird/pigeon.js";
import { Owl } from "./bird/owl.js";
import { getRandomPackage } from './Package.js';

const container = document.getElementById("container");
const view = new View();

const eagle = view.createBirdView(new Eagle());
container.appendChild(eagle);
container.appendChild(view.createBirdView(new Pigeon()));
container.appendChild(view.createBirdView(new Owl()));

console.log(getRandomPackage());