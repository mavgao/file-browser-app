import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";

export default function UploadFileList({ files }) {
  const list = files.map((f, i) => (
    <ListItem dense key={i}>
      <ListItemIcon>
        <ArticleIcon />
      </ListItemIcon>
      <ListItemText primary={`${f.name}`} />
    </ListItem>
  ));

  return (
    <div>
      <List component="nav">{list}</List>
    </div>
  );
}
