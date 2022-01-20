import Card from "./Card";
import classes from "./ImageItem.module.css";
import heart from "../icons/favorite_black_24dp.svg";
import heartBorder from "../icons/favorite_border_black_24dp.svg";
function ImageItem(props) {
  function toggleLikeHandler() {
    if (document.getElementById(props.id).src.indexOf(heartBorder) !== -1) {
      document.getElementById(props.id).src = heart;
    } else {
      document.getElementById(props.id).src = heartBorder;
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.url} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <h6>{props.date}</h6>
          <img
            id={props.id}
            className={classes.icon + " " + classes.filter}
            src={heartBorder}
            onClick={toggleLikeHandler}
            alt=""
          />
        </div>
      </Card>
    </li>
  );
}
export default ImageItem;
