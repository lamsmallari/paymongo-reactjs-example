import { useState } from "react";

const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useState("light");
  return { colorScheme, setColorScheme };
};

export default useColorScheme;
