import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import { ThemeProvider } from "@mui/material/styles";
import NavBar from "./components/Navbar/NavBar";
import CreateFolderDialog from "./components/CreateFolder/CreateFolderDialog";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavBar />
        <CreateFolderDialog />
      </div>
    </ThemeProvider>
  );
}

export default App;
