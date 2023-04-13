import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";



const PatientInformation = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // ✅ Find the first object that matches a condition
  const patientInfo = mockDataContacts.find(obj => {
    return obj.id === 1;
  });

  return (    
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Datos del paciente
            </Typography>
          </Box>
          {patientInfo && (
            <Box            
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>                
              <Typography color={colors.grey[100]}>
                Nombre: {patientInfo.name}                                   
              </Typography>  
              <Typography color={colors.grey[100]}>
                Email: {patientInfo.email}                                   
              </Typography> 
              <Typography color={colors.grey[100]}>
                Edad: {patientInfo.age}                                   
              </Typography>  
              <Typography color={colors.grey[100]}>
                Telefono: {patientInfo.phone}                                   
              </Typography>
              <Typography color={colors.grey[100]}>
                Dirección: {patientInfo.address}                                   
              </Typography>    
              <Typography color={colors.grey[100]}>
                Ciudad: {patientInfo.city}          s                         
              </Typography> 
              <Typography color={colors.grey[100]}>
                zipCode: {patientInfo.zipCode}                                   
              </Typography>       
            </Box>            
          </Box>
          )}          
        </Box>
  );
};

export default PatientInformation;
