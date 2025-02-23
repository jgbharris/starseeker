"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./page.module.css";
import Input from "@/components/input";

const JourneyCostPage = () => {
  interface RouteData {
    currency: string;
    journeyCost: number;
    parkingFee: number;
    recommendedTransport: {
      capacity: number;
      name: string;
      ratePerAu: number;
    };
  }

  const [data, setData] = useState<RouteData | null>(null);
  const [distance, setDistance] = useState("");
  const [passengers, setPassengers] = useState("");
  const [parking, setParking] = useState("");
  const handleDistanceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDistance(e.target.value);
  };

  const handlePassengersChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassengers(e.target.value);
  };

  const handleParkingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParking(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(
      `https://hstc-api.testing.keyholding.com/transport/${distance}?passengers=${passengers}&parking=${parking}`,
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
        <h1>Journey Details</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            label="Distance"
            value={distance}
            name="distance"
            onChange={handleDistanceChange}
            placeholder="Please enter the distance"
          />
          <Input
            type="text"
            label="Number of passengers"
            value={passengers}
            name="passengers"
            onChange={handlePassengersChange}
            placeholder="Please enter the # of passengers"
          />
          <Input
            type="text"
            label="Days of parking"
            value={parking}
            name="parking"
            onChange={handleParkingChange}
            placeholder="Please enter days of parking"
          />
          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className={styles.infoContainer}>
        <h1>Journey Cost</h1>
        {data && (
          <div>
            <div>
              {<p className={styles.infoPoint}>Currency: {data.currency}</p>}
            </div>
            <div>
              {
                <p className={styles.infoPoint}>
                  Journey Cost: {data.journeyCost}
                </p>
              }
            </div>
            <div>
              {
                <p className={styles.infoPoint}>
                  Parking Fee: {data.parkingFee}
                </p>
              }
            </div>
            <div>
              <p className={styles.infoPoint}>
                Recommended Transport: {data.recommendedTransport.name}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JourneyCostPage;
