const icons = [
  "paper-plane-outline",
  "compass-outline",
  "heart-outline",
  "person-outline",
];

export function Icons() {
  const [paperPlane, compass, heart, person] = icons;

  return (
    <div className="icones">
      <ion-icon name={paperPlane}></ion-icon>
      <ion-icon name={compass}></ion-icon>
      <ion-icon name={heart}></ion-icon>
      <ion-icon name={person}></ion-icon>
    </div>
  );
}
