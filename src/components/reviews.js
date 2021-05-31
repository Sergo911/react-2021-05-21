import Review from './review';
import style from "./reviews.module.css";

export default function Reviews(props) {
    return (
        <div className={style.card}>
            {props.reviews.map((review) => (
                <Review key={review.id} review={review} />
            ))}
        </div>
    );
}
