import { useState } from "react";
import style from "../styles/index.module.css";
import { corePlugin, Highlight, EditEvent, HighlightCustomLanguage } from "@lmarcel/highlight";

export default function Home() {
  const [code, setCode] = useState(`const a = red;\n\tconsole.log(a);\n\t\t//end`);

  const banner = new HighlightCustomLanguage(
    "myBanner",
    ["banner"],
    {
      grammar: {
        "banners": [{
          pattern: /\btitle\b/g,
          alias: "banner-title"
        }, {
          pattern: /\bsubtitle\b/g,
          alias: "banner-subtitle"
        }, {
          pattern: /\bend\b/g,
          alias: "banner-end"
        }]
      },
    }
  );

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
        externalLanguages={[banner]}
        onEdit={handleOnEdit}
        language="banner"
        code={code}
      />
    </main>
  );
};