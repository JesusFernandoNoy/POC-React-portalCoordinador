import { Box, Typography, useTheme, Tab, Tabs,Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataActivities } from "../../data/mockData";
import React, { useState, useEffect, useRef} from 'react'

const PatienActivities = ({patientId}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
   
        {
          field: "activityName",
          headerName: "Actividad",          
          align: "left",
          cellClassName: "name-column--cell",
        },
        {
          field: "frequency",
          headerName: "Frecuencia",    
          width: 100,  
          cellClassName: "name-column--cell",
        },
        {
          field: "dateAppointmentStr",
          headerName: "Fecha última cita",
          width: 100,               
          cellClassName: "name-column--cell",
        },
        {
          field: "programRange",
          headerName: "Rango de programación",  
          width: 150,     
          cellClassName: "name-column--cell",
        },
        {
          field: "activityState",          
          headerName: "Estado de la Actividad", 
          width: 100,      
          cellClassName: "name-column--cell",
        }   
      ];

  const dataFetchedRef = useRef(false);
  
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
      if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;
      fetch('http://localhost:8085/activity/ActivitiesByPatient/'+patientId)
        .then((response) => response.json())
        .then((data) => {
            //console.log(data);
            setActivityData(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
  }, []);

      
      return (
        <Box
         m="10px 10px 0 0"
         height="60vh"                  
         sx={{
           "& .MuiDataGrid-root": {
             border: "none",
           },
           "& .MuiDataGrid-cell": {
             borderBottom: "none",
           },
           "& .name-column--cell": {
             color: colors.black[100],
           },
           "& .MuiDataGrid-columnHeaders": {
             backgroundColor: colors.black[100],
             borderBottom: "none",
           },
           "& .MuiDataGrid-virtualScroller": {
             backgroundColor: colors.white[100],
           },
           "& .MuiDataGrid-footerContainer": {
             borderTop: "none",
             backgroundColor: colors.black[100],
           },
           "& .MuiCheckbox-root": {
             color: `${colors.greenAccent[200]} !important`,
           },
         }}
       >
         <DataGrid rows={activityData} columns={columns} />
       </Box>
      );    
  };
  
  export default PatienActivities;



