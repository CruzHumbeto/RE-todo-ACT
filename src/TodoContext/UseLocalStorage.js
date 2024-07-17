import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [items, setItems] = React.useState(initialValue);

  const [loading, setLoading] = React.useState(true);

  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName);

        let parcedItems;

        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parcedItems = initialValue;
        } else {
          parcedItems = JSON.parse(localStorageItems);
          setItems(parcedItems);
        }

        setLoading(false);
        setError(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 1500);
  }, [itemName, initialValue]);

  const saveItems = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItems(newItems);
  };

  return { items, saveItems, loading, error };
}

export { useLocalStorage };

// const defaultTodos = [
//   { texto: "Cortar cebollas 🧅", completed: false },
//   { texto: "Comprar 1/4 lb de 🧀", completed: true },
//   { texto: "Comprar mogollas para 🍔", completed: true },
//   { texto: "comprar un 🥖", completed: true },
//   { texto: "Terminar el curso de introduccion a react", completed: false },
//   { texto: "Terminar los cursos de python", completed: false },
//   { texto: "Aprender como ser un pro en todo lo que hago", completed: false },
// ];
// localStorage.setItem("RE:todo:ACT-v1", JSON.stringify(defaultTodos));
