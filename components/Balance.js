import { useBalance } from "wagmi";
export function Balance(address) {
  const { data, isError, isLoading } = useBalance({
    addressOrName: address
  });

  return <h3>{data}</h3>;
}
