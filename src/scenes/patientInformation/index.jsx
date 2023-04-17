import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";


const PatientInformation = ({patientId}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // ✅ Find the first object that matches a condition
  const patientInfo = mockDataContacts.find(obj => {  
    return obj.id === patientId;
  });

  return (    
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.white[100]}
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
            <Typography color={colors.black[100]} variant="h4" fontWeight="600">
              Datos del paciente
            </Typography>            
          </Box>
          <Typography color={colors.blueAccent[500]} variant="h4" fontWeight="600">
              Básicos
            </Typography>
          {patientInfo && (
            <Box            
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>                
              <Typography color={colors.black[100]}>
                Nombre: {patientInfo.name}                                   
              </Typography>  
              <Typography color={colors.black[100]}>
                Tipo de documento: {patientInfo.documentType}                                   
              </Typography>
              <Typography color={colors.black[100]}>
                Número de documento: {patientInfo.documentNumber}                                   
              </Typography>
              <Typography color={colors.black[100]}>
                Fecha de nacimiento: {patientInfo.dateOfBirth}                                   
              </Typography>  
              <Typography color={colors.black[100]}>
                Edad: {patientInfo.age} años                                   
              </Typography>  
              <Typography color={colors.black[100]}>
                Telefono: {patientInfo.phone}                                   
              </Typography>
              <Typography color={colors.black[100]}>
                sexo: {patientInfo.sexType}                                   
              </Typography>    
              <Typography color={colors.black[100]}>
                Ciudad: {patientInfo.city}          s                         
              </Typography> 
              <Typography color={colors.black[100]}>
                Estado civil: {patientInfo.maritalStatus}                                   
              </Typography>       
            </Box>            
          </Box>
          )}          
        </Box>
  );
};

export default PatientInformation;
