interface getGateByCodeParams {
  gateCode?: string;
}

interface gateProps {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  code: string;
  uuid: string;
  links: { code: string; hu: string }[];
}

export default async function getGateByCode({
  gateCode,
}: getGateByCodeParams): Promise<gateProps | null> {
  try {
    const gateCodeCapitalized = gateCode?.toUpperCase(); // Capitalize to meet API requirements

    const res = await fetch(
      `https://hstc-api.testing.keyholding.com/gates/${gateCodeCapitalized}`,
      {
        method: "GET",
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        },
      },
    );
    const gate = await res.json();
    return gate; // Return the gate directly
  } catch (error) {
    console.error(error);
    return null;
  }
}
