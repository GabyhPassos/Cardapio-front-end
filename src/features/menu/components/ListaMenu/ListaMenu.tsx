import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

function Car(props: { brand: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
  return <li>I am a { props.brand }</li>;
}
  export const ListaMenu = () => {
  const cars = [
    {id: 1, brand: 'Brigadeiro'},   
    {id: 2, brand: 'Cookies recheado'},
    {id: 3, brand: 'Cone trunfado'},
    {id: 4, brand: 'Mini bolo'},
    {id: 5, brand: 'Kit brigadeiro'},
    {id: 6, brand: 'Copo da felicidade'},

  ];
  return (
    <>
      <h1>Não deixe para amanhã o docinho que você pode comer hoje!</h1>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}