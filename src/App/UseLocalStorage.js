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
    }, 3000);
  }, []);

  const saveItems = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItems(newItems);
  };

  return { items, saveItems, loading, error };
}

export { useLocalStorage };
