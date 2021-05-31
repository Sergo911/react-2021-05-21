import Rate from "./rate";

export default function Review(props) {
    return (
        <p><Rate value={props.review.rating}/>{props.review.user}: {props.review.text}</p>
    );
}
