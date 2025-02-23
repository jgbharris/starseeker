"use client";
import Input from "@/components/input";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./page.module.css";

const CheapestRoutePage = () => {
  interface RouteData {
    from: {
      code: string;
      name: string;
      links: { code: string; hu: string }[];
    };
    to: {
      code: string;
      name: string;
      links: { code: string; hu: string }[];
    };
  }

  const [data, setData] = useState<RouteData | null>(null);

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const handleOriginChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOrigin(e.target.value);
  };

  const handleDestinationChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDestination(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(
      `https://hstc-api.testing.keyholding.com/gates/${origin}/to/${destination}`,
      {
        method: "GET",
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <h1>Cheapest route</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            label="Origin"
            value={origin}
            name="origin"
            onChange={handleOriginChange}
            placeholder="Please enter the origin"
          />
          <Input
            type="text"
            label="Destination"
            value={destination}
            name="destination"
            onChange={handleDestinationChange}
            placeholder="Please enter the destination"
          />
          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
      </div>
      {data && (
        <div className={styles.infoContainer}>
          <h1>Route details</h1>
          <div className={styles.routeInfo}>
            Origin: {data.from.name} ({data.from.code})
          </div>
          <div className={styles.routeInfo}>
            Destination: {data.to.name} ({data.to.code})
          </div>
        </div>
      )}
    </div>
  );
};

export default CheapestRoutePage;
