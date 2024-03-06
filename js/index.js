import Event from './event.js';
import Timer from './timer.js';

import { addBord, init, update } from './mainView.js';
import { Eagle } from "./bird/eagle.js";
import { Pigeon } from "./bird/pigeon.js";
import { Owl } from "./bird/owl.js";
import { getRandomPackage } from './Package.js';
import { WeakPistol } from "./gun/pistol.js";
import { Game } from "./game.js";

const game = Game.getGame();

const tickEvent = new Event();
const timer = new Timer(tickEvent);
timer.start()

init();
tickEvent.addEventListener('tick', update );


const eagle = new Eagle();
// const pigeon = new Pigeon();
// const owl = new Owl();
addBord(eagle)
