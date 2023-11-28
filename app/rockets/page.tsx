import React from "react";
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import RocketCard from "@/app/components/RocketCard";

export const revalidate = 5; // TODO:does it do something?!
const query = gql`
  query RocketsQuery {
    rockets {
      name
      description
      first_flight
      id
    }
  }
`;

export default async function RocketsPage() {
  // TODO: what is a good error handling pattern here? how to show error page? try/catch?

  const client = getClient();
  const data = await client.query({ query });
  console.log({ data });
  return (
    <div className="max-w-fit mx-auto">
      <h1 className="mt-5 text-2xl">Rockets</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* TODO: add type interface */}
        {data.data.rockets.map((rocket: any) => (
          <RocketCard
            key={rocket.id}
            name={rocket.name}
            description={rocket.description}
            first_flight={rocket.first_flight}
          />
        ))}
      </div>
    </div>
  );
}
