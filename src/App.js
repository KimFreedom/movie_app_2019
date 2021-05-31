import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name: "Mandoo",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/%EB%A7%8C%EB%91%90.jpg/330px-%EB%A7%8C%EB%91%90.jpg",
    rating: 8
  },
  {
    id:2,
    name: "Boolgogi",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2015/04/18/c2aac4feb7c5fe07b8d118311cc8141a1.jpg",
    rating: 7
  },
  {
    id:3,
    name: "Ramen",
    image: "https://news.pulmuone.co.kr/webfile/webedit/20200825/20200825132643_%EB%A9%B4%EB%B0%9C%ED%83%90%EA%B5%AC1.jpg",
    rating: 6
  },
  {
    id:4,
    name: "Watermelon",
    image: "http://www.mindgil.com/news/photo/202006/69432_3588_1441.jpg",
    rating: 5
  }
];

function Food({ name, picture, rating }) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/10.0</h4>
    <img src={picture} alt={name} />
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />;
}

function App() {
  return (
    <div className="App">
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
