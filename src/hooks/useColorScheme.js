import { useState } from "react";

const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useState("dark");
  return { colorScheme, setColorScheme };
};

export default useColorScheme;
