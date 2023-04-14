import { Box, Typography, Tab, Tabs} from "@mui/material";
import Header from "../../components/Header";
import { useState } from 'react';
import Candidatos from "../../scenes/candidatos";
import Vinculados from "../../scenes/vinculados";

const Gestion = () => {

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <Box m="10px" width={1120} borderRadius={3} paddingBottom={5}>

      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Gestión de Pacientes" subtitle="Managing the pacients" />
        <Box>
          <div align="center">Prioridad de un paciente</div>
          <img
            alt="priority-patient" 
            width="400px"                 
            src={`../../assets/PrioridadPaciente.jpg`}                  
          />
        </Box>
      </Box>      
      <Tabs value={tabIndex} onChange={handleTabChange} textColor="secondary" indicatorColor="secondary">
        <Tab label="Candidatos" />        
        <Tab label="Vinculados" />        
      </Tabs>      
      <Box sx={{ padding: 2 }}>
        {tabIndex === 0 && (
          <Candidatos />
        )}
        {tabIndex === 1 && (
          <Vinculados />
        )}        
      </Box>
    </Box>       
  );
};

export default Gestion;