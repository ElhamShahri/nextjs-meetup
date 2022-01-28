import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUP = [
  {
    key: "m1",
    id: "m1",
    title: "first",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Golden_gate_of_Ueno_T%C5%8Dsh%C5%8D-g%C5%AB_Shinto_shrine%2C_Tokyo%2C_Japan.jpg/600px-Golden_gate_of_Ueno_T%C5%8Dsh%C5%8D-g%C5%AB_Shinto_shrine%2C_Tokyo%2C_Japan.jpg",
    address: "any where you like",
    description: "this is first meetup! ",
  },

  {
    key: "m2",
    id: "m2",
    title: "second",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Golden_gate_of_Ueno_T%C5%8Dsh%C5%8D-g%C5%AB_Shinto_shrine%2C_Tokyo%2C_Japan.jpg/600px-Golden_gate_of_Ueno_T%C5%8Dsh%C5%8D-g%C5%AB_Shinto_shrine%2C_Tokyo%2C_Japan.jpg",
    address: "any where you like",
    description: "this is first meetup! ",
  },
];
export default function HomePage() {
  return (

      <MeetupList meetups={DUMMY_MEETUP} />
  
  );
}
