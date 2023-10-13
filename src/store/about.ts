import { Store } from "../core/heropy";

interface State {
  photo: string;
  name: string;
  email: string;
  blog: string;
  github: string;
  repository: string;
}

export default new Store<State>({
  photo: "",
  name: "DOBBY / KukHaHyeon",
  email: "kukhahyeon@gmail.com",
  blog: "None",
  github: "https://github.com/kuk0901",
  repository: "https://github.com/ParkYoungwoong/vanillajs-movie-app"
});
