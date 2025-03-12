import { Button } from "antd";
import axios from "axios";
import { FC, useState } from "react";

interface ApiResultProps {
  uri: string;
}
export const ApiResult: FC<ApiResultProps> = (props) => {
  const [response, setResponse] = useState("");
  const handleOnClick = async () => {
    try {
      const response = await axios.post(props.uri);
      setResponse(response.data);
    } catch (error) {
      console.error("Error calling API:", error);
      setResponse("Error calling API");
    }
  };
  return (
    <>
      <Button type="primary" onClick={handleOnClick}>Call Api</Button>
      <div>{response}</div>
    </>
  );
};

