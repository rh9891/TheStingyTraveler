let db;

// A request for "budget" database instance.
const request = window.indexedDB.open("budget", 1);

// Creates schema; creates the "table" and "primary key".
request.onupgradeneeded = event => {
    const db = event.target.result;
    // Creates the object store called "pending" - with an id keyPath that can be used to query on - and sets the autoIncrement to true.
    db.createObjectStore("pending", { keyPath: "id", autoIncrement: true });
};

// Opens a transaction, accesses the objectStore and statusIndex.
request.onsuccess = event => {
    db = event.target.result;
    if (navigator.onLine) {
        checkDatabase();
    }
};

request.onerror = event => {
    console.log("There was an error.");
};

function saveRecord(record) {
    // Creates a transaction on the database.
    const transaction = db.transaction(["pending"], "readwrite");
    // Accesses the object store.
    const store = transaction.objectStore("pending");

    store.add(record);
};

function checkDatabase() {
    // Opens a transaction on the database.
    const transaction = db.transaction(["pending"], "readwrite");
    const store = transaction.objectStore("pending");
    const getAll = store.getAll();
  
    // Accesses the object store and gets all the records from the store to set it to a variable.
    getAll.onsuccess = () => {
        if (getAll.result.length > 0) {
            fetch("/api/transaction/bulk", {
                method: "POST",
                body: JSON.stringify(getAll.result),
                headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
                }
            })
        .then(response => response.json())
        .then(() => {
          // If successful, open a transaction and access the object store.
          const transaction = db.transaction(["pending"], "readwrite");
          const store = transaction.objectStore("pending");
          // Clear all items in the store.
          store.clear();
      });
    }
  };
};

// Listen for application to come back online.
window.addEventListener("online", checkDatabase);