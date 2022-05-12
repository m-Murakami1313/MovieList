import {requests} from "../FetchUrl/request"
import styles from "./Body.module.scss";
import {List} from "../../UI/List/List"

export const Body = () => {
  
  return (
    <div>
      <List title="TOP" fetchUrl={requests.feachTopRated}/>
      <List title="TOP" fetchUrl={requests.feachNetflixOriginals}/>
    </div>
  )
};
