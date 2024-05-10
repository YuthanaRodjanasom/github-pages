import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const navigate = useNavigate();
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
    </div>
  );
};

export default Contacts;
