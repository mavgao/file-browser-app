import { KeyboardArrowLeft } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function BreadcrumbText({
  path,
  handleClickPath,
  handleGoBack,
  canGoBack,
  rootTitle,
}) {
  const separator = <span>&gt;</span>;
  const rootPath = (
    <span onClick={(e) => handleClickPath(e, -1)} data-index={0}>
      {rootTitle} {path.length ? separator : ""}
    </span>
  );
  const lastPath = [...path].pop() || rootTitle;
  const directories = path.map((dir, index) => {
    return (
      <span
        key={index}
        data-index={index}
        onClick={(e) => handleClickPath(e, index)}
      >
        <span>{dir}</span> {path.length - 1 !== index ? separator : ""}&nbsp;
      </span>
    );
  });

  return (
    <div className="BreadcrumbText">
      {/* <div>
        <Button
          onClick={handleGoBack}
          color="inherit"
          type="button"
          style={{ display: canGoBack ? "inline-flex" : "none" }}
        >
          <KeyboardArrowLeft />
        </Button>
        {lastPath}
      </div> */}
      <div>
        {rootPath} {directories}
      </div>
    </div>
  );
}
