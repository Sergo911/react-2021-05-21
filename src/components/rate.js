import style from './rate.module.css';

import { ReactComponent as StarFull } from '../icons/star-full.svg';
import { ReactComponent as StarSemi } from '../icons/star-semi.svg';
import { ReactComponent as StarNull } from '../icons/star-null.svg';

export default function Rate(props) {
    console.log('---Rate.props=', props)

    const rates = [1, 2, 3];
    const rates2 = props;
    // const { rates3 = [] } = props.rating;
    console.log('rates=', rates)
    console.log('rates2=', rates2)
    // console.log('rates3=', rates3)
    const doubled = rates.map((rate) =>
    rate * 2);
    console.log('---', doubled);

    // const starList = props.value.map((value) => {
    //     return (
    //         <StarFull className={style.icon} />
    //     )
    // })
    const starList1 = '<StarFull className={style.icon} />'.repeat(props.value);
    const starList2 = '<StarFull className={style.icon} /><StarFull className={style.icon} />';
    const starList3 = <StarFull className={style.icon} />;

    return (
        // {props.value}
        // <div className={style.card}>
        //     <StarFull className={style.icon} />
        // </div>
        <div className={style.card}>
            {starList3} <text>{props.value}</text>
        </div>
);
}


