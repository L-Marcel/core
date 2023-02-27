import { useState } from "react";
import style from "../styles/index.module.css";
import { corePlugin, Highlight, EditEvent, highlightCustomLanguages } from "@lmarcel/highlight";

export default function Home() {
  const [code, setCode] = useState(`const a = red;\n\tconsole.log(a);\n\t\t//end`);

  function handleOnEdit(e: EditEvent) {
    setCode(e.currentTarget.value);
  };

  return (
    <main className={style.container}>
      <Highlight
        plugins={[
          corePlugin()
        ]}
        placeholder="Put your code here..."
        onEnterEditMode={() => {
          console.log("enter: edit mode");
        }}
        onExitEditMode={() => {
          console.log("exit: edit mode");
        }}
        style={{
          minWidth: 800
        }}
        editable={true}
        onEdit={handleOnEdit}
        language="myBanner"
        code={code}
      />
    </main>
  );
};