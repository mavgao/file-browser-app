import { Button } from "@mui/material";

export default function FileUploader() {
  const styles = {
    inputfile: {
      display: "none",
    },
  };

  return (
    <div>
      <label htmlFor="button-file">
        <input style={styles.inputfile} id="button-file" multiple type="file" />
        <Button component="span" variant="contained" color="primary">
          Select Files
        </Button>
      </label>
    </div>
  );
}
