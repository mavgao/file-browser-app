import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import { ThemeProvider } from "@mui/material/styles";
import NavBar from "./components/Navbar/NavBar";
import CreateFolderDialog from "./components/CreateFolder/CreateFolderDialog";
import FileList from "./components/FileList/FileList";

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
        <FileList />
      </div>
    </ThemeProvider>
  );
}

export default App;
