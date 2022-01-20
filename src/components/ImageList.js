import classes from "./ImageList.module.css";
import ImageItem from "./ImageItem";
function ImageList(props) {
  return (
    <ul className={classes.list}>
      {props.images.map((image) => (
        <ImageItem
          key={image.id}
          id={image.id}
          title={image.title}
          url={image.url}
          date={image.date}
        />
      ))}
    </ul>
  );
}
export default ImageList;
