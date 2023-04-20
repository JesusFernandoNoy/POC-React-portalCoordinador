import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react'


const PatientInformation = ({patientId}) => {

  console.log(patientId); 
 
  let navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleClick = (event) => { 
    let path = `/gestion`; 
    navigate(path);
  };

  // ✅ Find the first object that matches a condition
  /*const patientInfo = mockDataContacts.find(obj => {  
    return obj.id === patientId;
  });*/

  const dataFetchedRef = useRef(false);

  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetch('http://localhost:8085/patient/id/'+patientId)
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setPatientData(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
  }, []);

  return (    
        <Box m="0px 5px"
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.white[100]}
          overflow="auto"
        >
          <Button
            variant="contained"
            color="primary"
            onClick={(event) => {
              handleClick(event);
            }}
          >
            Volver
          </Button>
          {patientData && (  
            <Typography color={colors.blueAccent[600]} variant="h2" fontWeight="700">
              {patientData.name +" "+ patientData.lastName} 
              <br />
            </Typography>  
            ) } 
          <Box 
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}            
          >
            <Typography color={colors.black[100]} variant="h4" fontWeight="600">
              Datos del paciente
            </Typography>                 
          </Box>
          <Typography color={colors.blueAccent[500]} variant="h4" fontWeight="600">
              Básicos
            </Typography>
          {patientData && (
            <Box            
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}            
          >
            <Box>
              <div style={{ display: "flex", alignItems:"center", gap: "2rem" }}>
                <Typography color={colors.black[100]}>
                  <b>Tipo de documento:</b>                                  
                </Typography>                
                <Typography color={colors.black[100]}>
                  {patientData.documentTypeName}                                   
                </Typography>    
              </div>            
              <div style={{ display: "flex", alignItems:"center", gap: "0.7rem" }}>
                <Typography color={colors.black[100]}>
                  <b>Número de documento:</b>                                    
                </Typography>
                <Typography color={colors.black[100]}>
                  {patientData.documentNumber}                                   
                </Typography>
              </div>
              <div style={{ display: "flex", alignItems:"center", gap: "1.6rem" }}>
                <Typography color={colors.black[100]}>
                  <b>Fecha de nacimiento:</b>                                   
                </Typography>
                <Typography color={colors.black[100]}>
                  {patientData.birthDayFormatter}                                   
                </Typography>
              </div>
              <div style={{ display: "flex", alignItems:"center", gap: "7.4rem" }}>
                <Typography color={colors.black[100]}>
                  <b>Edad:</b>                                   
                </Typography> 
                <Typography color={colors.black[100]}>
                  {patientData.age}                                   
                </Typography> 
              </div> 
              <div style={{ display: "flex", alignItems:"center", gap: "6rem" }}>
                <Typography color={colors.black[100]}>
                  <b>Telefono:</b>                                  
                </Typography>
                <Typography color={colors.black[100]}>
                  {patientData.phone}                                   
                </Typography>
              </div>
              <div style={{ display: "flex", alignItems:"center", gap: "7.6rem" }}>
                <Typography color={colors.black[100]}>
                  <b>sexo:</b>                                  
                </Typography>
                <Typography color={colors.black[100]}>
                  {patientData.gender}                                   
                </Typography>
              </div>
              <div style={{ display: "flex", alignItems:"center", gap: "6.7rem" }}>
                <Typography color={colors.black[100]}>
                  <b>Ciudad:</b>                         
                </Typography>
                <Typography color={colors.black[100]}>
                  {patientData.city}                        
                </Typography> 
              </div>    
              <div style={{ display: "flex", alignItems:"center", gap: "5rem" }}>
                <Typography color={colors.black[100]}>
                  <b>Estado civil:</b>                                 
                </Typography>
                <Typography color={colors.black[100]}>
                  {patientData.maritalStatus}                                   
                </Typography>
              </div>                     
            </Box>            
          </Box>
          )}          
        </Box>
  );
};

export default PatientInformation;
