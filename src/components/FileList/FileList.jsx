import { useSelector } from "react-redux";
import File from "../File/File";

export default function FileList() {
  const { currentPath, folders, filteredFiles } = useSelector((state) => ({
    currentPath: state.folder.currentPath,
    folders: state.folder.folders,
    filteredFiles: state.folder.filteredFolders,
  }));
  const fileList =
    filteredFiles.length > 0 ? filteredFiles : folders[currentPath.join("/")];
  return (
    <div className="FileList">
      {fileList.map((file, key) => {
        return <File type={file.type} name={file.name} key={key} />;
      })}
    </div>
  );
}
