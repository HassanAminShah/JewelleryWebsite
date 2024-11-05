import React, { useState } from "react";
import { Switch, Typography } from "antd";

const { Paragraph, Text } = Typography;

const App: React.FC = () => {
  const [ellipsis, setEllipsis] = useState(true);

  return (
    <div style={{ width: "400px" }}>
      <Switch
        checked={ellipsis}
        onChange={() => {
          setEllipsis(!ellipsis);
        }}
      />

      <Paragraph ellipsis={ellipsis}>
        I love the policy of Gk jewellers. Exchange. Policy is quite real. And
        the product emarld ring was outstanding.
      </Paragraph>
      <Paragraph
        ellipsis={
          ellipsis ? { rows: 1, expandable: true, symbol: "more" } : false
        }
      >
        One can say that Gk jewellers is the name of trust.I love the policy of
        Gk jewellers. Exchange. Policy is quite real. And the product emarld
        ring was outstanding.
      </Paragraph>
    </div>
  );
};

export default App;
