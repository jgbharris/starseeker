"use client";

import LoadingSpinner from "@/components/loadingSpinner";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

const GatesPage = () => {
  interface Gate {
    code: string;
    id: string;
    name: string;
    links: { code: string; hu: string }[];
  }

  const [data, setData] = useState<Gate[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://hstc-api.testing.keyholding.com/gates", {
      method: "GET",
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <LoadingSpinner />;
  if (!data) return <p>No gate data</p>;

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Gates information</h1>
      {data &&
        data.map((gate) => (
          <div key={gate.code} className={styles.container}>
            <div className={styles.gateInfo}>
              <Link
                href={{
                  pathname: `/gates/${gate.code}`,
                }}
              >
                <h3>Name: {gate.name}</h3>
              </Link>
              <p>Gate code: {gate.code}</p>
            </div>
            <div className={styles.gateLinks}>
              <p>Links:</p>
              {gate.links.map((link) => (
                <div key={link.code}>
                  <p>Gate code: {link.code}</p>
                  <p>hu: {link.hu}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default GatesPage;
