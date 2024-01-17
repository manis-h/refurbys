import React, { useEffect, useState } from "react";

function useLol() {
  const [myDate, setMyDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setMyDate(new Date()), 1000);
  }, []);

  return [myDate];
}

export default useLol;
