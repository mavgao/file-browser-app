import { useSelector } from "react-redux";
import File from "../File/File";

export default function FileList() {
  const { currentPath, folders } = useSelector((state) => ({
    currentPath: state.folder.currentPath,
    folders: state.folder.folders,
  }));
  return (
    <div className="FileList">
      {currentPath.length === 0 ? (
        <File type="dir" name="root-folder" />
      ) : (
        folders[currentPath.join("/")].map((file, key) => {
          return <File type={file.type} name={file.name} key={key} />;
        })
      )}
    </div>
  );
}
