import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function Header() {
  return (
    <div>
      <Stack spacing={2}>
        <Typography variant="h4">Kanban</Typography>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
         
          <Typography key="3" color="text.primary">
            Dashboard
            </Typography>
          ,
          <Typography underline="hover" key="1" color="inherit" href="#">
            Kanban
            </Typography>
        </Breadcrumbs>
      </Stack>
      
    </div>
  )
}

export default Header
