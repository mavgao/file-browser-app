import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import { ThemeProvider } from "@mui/material/styles";
import NavBar from "./components/Navbar/NavBar";
import CreateFolderDialog from "./components/CreateFolder/CreateFolderDialog";
import FileList from "./components/FileList/FileList";
import ContextMenu from "./components/ContextMenu/ContextMenu";
import UploadFileDialog from "./components/UploadFile/UploadFileDialog";
import RenameDialog from "./components/ContextMenu/ContextMenuDialogs/RenameDialog";
import CopyDialog from "./components/ContextMenu/ContextMenuDialogs/CopyDialog";

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
        <UploadFileDialog />
        <RenameDialog />
        <CopyDialog />
        <FileList />
        <ContextMenu />
      </div>
    </ThemeProvider>
  );
}

export default App;
