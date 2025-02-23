import getGateByCode from "@/actions/getGateByCode";
import styles from "./page.module.css";

interface GateDetailsPageParams {
  gatecode?: string;
}

const GateDetailsPage = async ({
  params,
}: {
  params: GateDetailsPageParams;
}) => {
  const { gatecode } = await params;

  if (!gatecode) {
    throw new Error("Gate code is required");
  }

  const gate = await getGateByCode({ gateCode: gatecode });

  return (
    <div className={styles.container}>
      {gate && (
        <>
          <div>
            <h1>Name: {gate.name}</h1>
            <p>Code: {gate.code}</p>
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
        </>
      )}
    </div>
  );
};

export default GateDetailsPage;
