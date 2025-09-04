import "./App.css";
import IconMoon from "@/assets/icon-moon.svg?react";
import IconSun from "@/assets/icon-sun.svg?react";
import { useTheme } from "./components/theme-provider";

function App() {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className={"flex flex-col justify-center items-center"}>
      <div
        className={
          "flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-[#1111111A] dark:bg-[#F9F9F933]"
        }
        onClick={handleTheme}
      >
        {theme === "dark" ? <IconSun /> : <IconMoon />}
      </div>

      <p>React Vite Template</p>
    </div>
  );
}

export default App;
