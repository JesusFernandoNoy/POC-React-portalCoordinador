import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import PatienActivity from "../../scenes/patientActivities";
import PatienInformation from "../../scenes/patientInformation";


const Patient = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // ✅ Find the first object that matches a condition
  const patientInfo = mockDataContacts.find(obj => {
    return obj.id === 1;
  });

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Gestión de Pacientes" subtitle="Nombre Paciente" />        
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >      

        {/* ROW 1 */ }           
        <PatienInformation />
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          height="450px"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Actividades Pendientes
              </Typography>              
            </Box>
            <Box>
              <IconButton>
                Agendar Actividades
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="350px" m="-20px 0 0 0">
            <PatienActivity />
          </Box>
        </Box>        
      </Box>
    </Box>
  );
};

export default Patient;
