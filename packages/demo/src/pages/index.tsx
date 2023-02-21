import { useState } from "react";
import style from "../styles/index.module.css";
import { Highlight, EditEvent } from "@lmarcel/highlight";

export default function Home() {
  const [code, setCode] = useState(`const a = red;\nconsole.log(a);`);

  function handleOnEdit(e: EditEvent) {
    setCode(e.currentTarget.value);
  };

  return (
    <main className={style.container}>
      <Highlight
        placeholder="Put your code here..."
        style={{
          minWidth: 800
        }}
        editable={true}
        onEdit={handleOnEdit}
        code={code}
        language="javascript"
      />
    </main>
  );
};