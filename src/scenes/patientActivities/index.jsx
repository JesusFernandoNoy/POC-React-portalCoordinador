import { Box, Typography, useTheme, Tab, Tabs,Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataActivities } from "../../data/mockData";

const PatienActivities = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
   
        {
          field: "Activity",
          headerName: "Actividad",          
          align: "left",
          cellClassName: "name-column--cell",
        },
        {
          field: "Frecuency",
          headerName: "Frecuencia",    
          width: 150,  
          cellClassName: "name-column--cell",
        },
        {
          field: "dateAppointment",
          headerName: "Fecha última cita",
          width: 150,               
          cellClassName: "name-column--cell",
        },
        {
          field: "programRange",
          headerName: "Rango de programación",  
          width: 150,     
          cellClassName: "name-column--cell",
        },
        {
          field: "ActivityState",          
          headerName: "Estado de la Actividad", 
          width: 150,      
          cellClassName: "name-column--cell",
        }   
      ];

      return (
        <Box
         m="10px 0 0 0"
         height="40vh"
         width="80vh"
         sx={{
           "& .MuiDataGrid-root": {
             border: "none",
           },
           "& .MuiDataGrid-cell": {
             borderBottom: "none",
           },
           "& .name-column--cell": {
             color: colors.greenAccent[300],
           },
           "& .MuiDataGrid-columnHeaders": {
             backgroundColor: colors.blueAccent[700],
             borderBottom: "none",
           },
           "& .MuiDataGrid-virtualScroller": {
             backgroundColor: colors.primary[400],
           },
           "& .MuiDataGrid-footerContainer": {
             borderTop: "none",
             backgroundColor: colors.blueAccent[700],
           },
           "& .MuiCheckbox-root": {
             color: `${colors.greenAccent[200]} !important`,
           },
         }}
       >
         <DataGrid rows={mockDataActivities} columns={columns} />
       </Box>
      );    
  };
  
  export default PatienActivities;



