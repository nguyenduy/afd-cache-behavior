import { Button } from "antd";
import axios from "axios";
import { FC, useState } from "react";

interface ApiResultProps {
  uri: string;
  cacheDisabledThroughRuleSet?: boolean;
}
export const ApiResult: FC<ApiResultProps> = (props) => {
  const [response, setResponse] = useState("");
  const handleOnClick = async () => {
    try {
      const response = await axios.post(props.uri, null, {
        headers: {
          "cache-disabled": props.cacheDisabledThroughRuleSet ? "true" : "false",
        },
      });
      setResponse(response.data);
    } catch (error) {
      console.error("Error calling API:", error);
      setResponse("Error calling API");
    }
  };
  return (
    <>
      <Button type="primary" onClick={handleOnClick}>
        Call Api
      </Button>
      <div>{response}</div>
    </>
  );
};
