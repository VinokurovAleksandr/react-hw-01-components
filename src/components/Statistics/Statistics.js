import PropTypes from 'prop-types';
import statCss from '../Statistics/Statistics.module.css';


export default function Statistics({
    title ,
    stats }) {

    return (
        <section className={statCss.statistics}>
            <h2 className={statCss.title}>{title}</h2>

            <ul className={statCss.statList}>
                {stats.map(stat => (
                    <li className={statCss.item}
                        key={stat.id}
                        style={{backgroundColor:rundomColorBlock()}}
                    >
                    <span className={statCss.label}>{stat.label}</span>
                    <span className={statCss.percentage}>{stat.percentage}%</span>
                </li>
                ))}
            </ul>
        </section>
    )
};

function rundomColorBlock() {
    return (
        '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
    )  
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,

    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
};