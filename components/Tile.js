import PropTypes from 'prop-types';
import Link from 'next/link';


const Tile = props => (
    <article className="thumb">
        <Link ><a href={props.image} className="image"><img src={props.image} alt={props.description}/></a></Link>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <style jsx>{`
        
        img {
            max-width:100%;
            min-height:100%;
        }
      `}</style>
    </article>
    
);

Tile.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
};

export default Tile;