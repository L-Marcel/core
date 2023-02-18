import React from "react";
import { getComponents } from "@lmarcel/highlight";
import { List, ListItem } from "./base/List";

export function HighlightAvailableInputs() {
  const components = getComponents();
  const availableLanguages = components.languages;

  return (
    <List>
      {Object.entries(availableLanguages)
        .filter(([key]) => key !== "meta")
        .map(([key, value]) => {
          const { title, alias, aliasTitles } = Object.entries(value).reduce((prev, [key, property]) => {
            if(key === "alias" && Array.isArray(property)) {
              prev.alias = [...prev.alias, ...property];
              prev.aliasTitles = [...prev.aliasTitles, ...(Array.from({ 
                length: property.length
              }).fill("None") as string[])]
            } else if(key === "alias") {
              prev.alias.push(property);
              prev.aliasTitles.push("None");
            } else if(key === "aliasTitles") {
              Object.entries(property).forEach(([alias, title]) => {
                const aliasIndex = prev.alias.findIndex(availableAlias => availableAlias === alias);

                if(aliasIndex !== -1) {
                  prev.aliasTitles[aliasIndex] = title as string;
                };
              });
            } else if(key === "title") {
              prev.title = property;
            };

            return prev;
          }, {
            title: "None",
            alias: [],
            aliasTitles: []
          } as {
            title: string,
            alias: string[],
            aliasTitles: string[]
          });

          return (
            <ListItem key={key}>
              <strong><code>{key}</code></strong>{title !== "None"? ` / ${title}`:""}
              { alias.length > 0 &&
                <List>
                  {alias.map((currentAlias, index) => {
                    const aliasTitle = aliasTitles[index];

                    return (
                      <ListItem key={`${key}-${currentAlias}`}>
                        <strong><code>{currentAlias}</code></strong>{aliasTitle !== "None"? ` / ${aliasTitle}`:""}
                      </ListItem>
                    );
                  })}
                </List>
              }
            </ListItem>
          );
      })}
    </List>
  );
};