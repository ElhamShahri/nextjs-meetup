import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Golden_gate_of_Ueno_T%C5%8Dsh%C5%8D-g%C5%AB_Shinto_shrine%2C_Tokyo%2C_Japan.jpg/600px-Golden_gate_of_Ueno_T%C5%8Dsh%C5%8D-g%C5%AB_Shinto_shrine%2C_Tokyo%2C_Japan.jpg"
      title="First"
      address="some where"
      description="this is first meetup"
    />
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { meetupId:"m1" } },
      { params: { meetupId:"m2" } }
    ],
    fallback: false // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;
  console.log(meetupId)
  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Golden_gate_of_Ueno_T%C5%8Dsh%C5%8D-g%C5%AB_Shinto_shrine%2C_Tokyo%2C_Japan.jpg/600px-Golden_gate_of_Ueno_T%C5%8Dsh%C5%8D-g%C5%AB_Shinto_shrine%2C_Tokyo%2C_Japan.jpg",
        id: meetupId,
        title: "First",
        address: "some where",
        description: "this is first meetup",
      },
    },
  };
}

export default MeetupDetails;
