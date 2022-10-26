import classes from "./CardIcon.module.css";
const CardIcon = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};
export default CardIcon;
