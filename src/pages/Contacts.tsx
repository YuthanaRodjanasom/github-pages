import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useGetPokemonQuery } from "../service/PokemonApiService/PokemonApiService";

const Contacts = () => {
  const navigate = useNavigate();
  const { data } = useGetPokemonQuery("");
  return (
    <div>
      <div>Contacts</div>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        go back
      </Button>
      <div>
        {data?.results?.map((item) => {
          return <div>{item.name}</div>;
        })}
      </div>
    </div>
  );
};

export default Contacts;
