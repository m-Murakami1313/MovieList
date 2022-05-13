import { List } from "../../UI/List/List";
import { requests } from "../RequestsUrl/RequestsUrl";

export const Body = () => {
  return (
    <div>
      <List title="TopRated" fetchUrl={requests.feachTopRated} />
      <List title="Action" fetchUrl={requests.feachAction} />
      <List title="Comedy" fetchUrl={requests.feachComedy} />
      <List title="Horror" fetchUrl={requests.feachHorror} />
      <List title="Fantasy" fetchUrl={requests.feachFantasy} />
    </div>
  );
};
