function ListItem(props) {
  return <li>Topico {props.value}</li>;
}

export default function List(props) {
  const topics = props.topics;
  const listItems = topics.map((topic) => (
    <ListItem key={topic.toString()} value={topic} />
  ));

  return <ul>{listItems}</ul>;
}
